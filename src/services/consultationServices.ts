import {
  create as createPhone,
  findByNumber,
} from "../repositories/phoneRepository";
import {
  create as createConsultation,
  getByDay,
} from "../repositories/consultationRepository";
import { ConsultationTurn } from "@prisma/client";
import { consultationPatientRegister } from "./patientServices";
import { wrongSchemaError } from "../utils/errorUtils";
import dayjs from "dayjs";
import { findById } from "../repositories/clinicRepository";

export async function schedule(
  patientName: string,
  health_insurance: string,
  number: string,
  consultationTurn: ConsultationTurn,
  consultationDate: Date,
  userId: number
) {
  console.log(userId);
  const clinic = await findById(userId);

  const userPhone = await findByNumber(number);

  const date = new Date(consultationDate);
  const consultations = await getByDay(date, clinic.id);
  if (consultations.length !== 0) {
    let limiter = 0;

    consultations.forEach((patient) => {
      if (patient.consultation_turn === consultationTurn) limiter++;

      if (limiter >= 8) throw { type: "conflict", message: "Schedule Full!" };
    });
  }

  if (userPhone) {
    const consultationToCreate = {
      patientName,
      health_insurance,
      patient_id: userPhone.patientId,
      consultation_date: date,
      consultation_turn: consultationTurn,
      clinic_id: clinic.id,
    };

    return await createConsultation(consultationToCreate);
  } else {
    const newPatient = await consultationPatientRegister(
      patientName,
      number,
      clinic.id
    );

    const consultationToCreate = {
      patientName,
      health_insurance,
      patient_id: newPatient.id,
      consultation_date: date,
      consultation_turn: consultationTurn,
      clinic_id: clinic.id,
    };

    return await createConsultation(consultationToCreate);
  }
}

export async function getConsultationsByDay(day: string, userId: number) {
  const clinic = await findById(userId);

  const date = new Date(day);

  if (!isValidDate(date)) throw wrongSchemaError("Dates must be yyyy-mm-dd !");

  const repositoryResult = await getByDay(date, clinic.id);

  if (repositoryResult.length === 0) {
    return {
      date,
      consultations: {
        morning: [],
        afternoon: [],
      },
    };
  }

  const consultationsToReturn = consultationsFilterByTurn(
    repositoryResult as [],
    date
  );

  return consultationsToReturn;
}

function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d as any);
}

function consultationsFilterByTurn(allConsultations: [], date: Date) {
  const morningConsultations = allConsultations.filter((patient: any) => {
    if (patient.consultation_turn === "manha") {
      delete patient.consultation_turn;
      return patient;
    }
  });

  const afternoonConsultations = allConsultations.filter((patient: any) => {
    if (patient.consultation_turn === "tarde") {
      delete patient.consultation_turn;
      return patient;
    }
  });

  const consultationsToReturn = {
    date,
    consultations: {
      morning: morningConsultations,
      afternoon: afternoonConsultations,
    },
  };
  return consultationsToReturn;
}
