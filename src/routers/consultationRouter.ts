import { Router } from "express";
import { scheduleConsultation } from "../controllers/consultationsController";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { authSchema } from "../schemas/authSchema";
import { consultationSchema } from "../schemas/consultationSchema";

const consultationRouter = Router();

consultationRouter.post(
  "/consultation",
  validateSchemaMiddleware(consultationSchema),
  scheduleConsultation
);

export default consultationRouter;
