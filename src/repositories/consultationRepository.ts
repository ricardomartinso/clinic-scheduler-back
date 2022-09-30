import { prisma } from "../config/database";
import { CreateConsultation } from "../types/consultationTypes";

export async function create(data: CreateConsultation) {
  await prisma.consultation.create({
    data,
  });
}
