import { prisma } from "../config/database";
import { CreateConsultation } from "../types/consultationTypes";

export async function create(data: CreateConsultation) {
  return await prisma.consultation.create({
    data,
  });
}

export async function getByDay(day: Date, clinicId: number) {
  return await prisma.consultation.findMany({
    where: { consultation_date: day, clinic_id: clinicId },
    select: {
      patientName: true,
      health_insurance: true,
      consultation_turn: true,
    },
  });
}
