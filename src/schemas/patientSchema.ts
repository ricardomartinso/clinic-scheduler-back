import { Patient } from "@prisma/client";
import Joi from "joi";

export const patientSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.number().required(),
  cpf: Joi.date().required(),
  health_insurance: Joi.string().required(),
  birth_date: Joi.date().required(),
});
