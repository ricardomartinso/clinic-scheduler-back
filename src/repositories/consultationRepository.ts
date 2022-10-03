import { prisma } from "../config/database";
import { CreateConsultation } from "../types/consultationTypes";

export async function create(data: CreateConsultation) {
  return await prisma.consultation.create({
    data,
  });
}
