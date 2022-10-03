import { create as createPatient } from "../repositories/patientRepository";
import {
  create as createPhone,
  findByNumber,
} from "../repositories/phoneRepository";
import { create as createConsultation } from "../repositories/consultationRepository";
import { ConsultationTurn } from "@prisma/client";
import { CreatePhone } from "../types/phoneTypes";
import { conflictError } from "../utils/errorUtils";
import { CreatePatient } from "../types/patientTypes";

export async function consultationPatientRegister(
  name: string,
  phoneNumber: string
) {
  await isNumberRepeated(phoneNumber);

  const patient = await createPatient({
    name,
    email: null,
    cpf: null,
    health_insurance: null,
    birth_date: null,
  });

  const phoneToCreate: CreatePhone = {
    number: phoneNumber,
    patientId: patient.id,
  };

  await createPhone(phoneToCreate);

  return patient;
}

export async function patientRegister(patient: CreatePatient) {
  const patientCreation = await createPatient(patient);
}

async function isNumberRepeated(phoneNumber: string) {
  const existPhone = await findByNumber(phoneNumber);

  if (existPhone) throw conflictError("Phone already created!");
}
