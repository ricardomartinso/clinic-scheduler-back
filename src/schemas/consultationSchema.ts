import Joi from "joi";

export const consultationSchema = Joi.object({
  patientName: Joi.string().required(),
  phone: Joi.number().required(),
  date: Joi.date().required(),
  turn: Joi.string().required(),
});
