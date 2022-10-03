import { prisma } from "../config/database";
import { CreatePhone } from "../types/phoneTypes";

export async function create(data: CreatePhone) {
  return await prisma.phone.create({
    data,
  });
}

export async function findByNumber(number: string) {
  const phone = await prisma.phone.findUnique({
    where: { number },
  });

  return phone;
}
