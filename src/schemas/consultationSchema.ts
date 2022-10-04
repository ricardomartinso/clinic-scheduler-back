import Joi from "joi";

export const consultationSchema = Joi.object({
  name: Joi.string().required(),
  health_insurance: Joi.string(),
  phone: Joi.number().required(),
  date: Joi.date().required(),
  turn: Joi.string().required(),
});
