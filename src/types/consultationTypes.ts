import { Consultation } from "@prisma/client";

export type CreateConsultation = Omit<Consultation, "id">;
