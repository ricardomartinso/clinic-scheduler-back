import { Patient } from "@prisma/client";
import { prisma } from "../config/database";
import { CreatePatient } from "../types/patientTypes";

export async function create(data: CreatePatient) {
  return await prisma.patient.create({
    data,
  });
}
