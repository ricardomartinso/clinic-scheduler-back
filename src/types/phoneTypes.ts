import { Phone } from "@prisma/client";

export type CreatePhone = Omit<Phone, "id">;
