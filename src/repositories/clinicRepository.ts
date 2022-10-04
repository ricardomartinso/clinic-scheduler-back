import { prisma } from "../config/database";

export async function findById(userId: number) {
  const clinic = await prisma.clinic.findFirst({
    where: { userId },
  });

  if (!clinic) throw { type: "not_found", message: "Clinic not created!" };

  return clinic;
}
