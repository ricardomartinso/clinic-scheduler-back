import { create as createPatient } from "../repositories/patientRepository";
import {
  create as createPhone,
  findByNumber,
} from "../repositories/phoneRepository";
import { create as createConsultation } from "../repositories/consultationRepository";
import { ConsultationTurn } from "@prisma/client";
import { CreatePhone } from "../types/phoneTypes";
import { conflictError } from "../utils/errorUtils";
import { consultationPatientRegister } from "./patientServices";

export async function schedule(
  patientName: string,
  number: string,
  consultationTurn: ConsultationTurn,
  consultationDate: Date
) {
  const userPhone = await findByNumber(number);

  if (userPhone) {
    const consultationToCreate = {
      patientName,
      patient_id: userPhone.patientId,
      consultation_date: new Date(consultationDate),
      consultation_turn: consultationTurn,
    };

    return await createConsultation(consultationToCreate);
  } else {
    const newPatient = await consultationPatientRegister(patientName, number);

    const consultationToCreate = {
      patientName,
      patient_id: newPatient.id,
      consultation_date: new Date(consultationDate),
      consultation_turn: consultationTurn,
    };

    return await createConsultation(consultationToCreate);
  }
}
