import { Patient } from "@prisma/client";

export type CreatePatient = Omit<Patient, "id">;
