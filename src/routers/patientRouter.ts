import { Router } from "express";
import { scheduleConsultation } from "../controllers/consultationsController";
import { registerPatient } from "../controllers/patientsController";
import authenticateToken from "../middlewares/authenticateToken";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { authSchema } from "../schemas/authSchema";
import { consultationSchema } from "../schemas/consultationSchema";

const patientRouter = Router();

patientRouter.post(
  "/patient",
  authenticateToken,
  validateSchemaMiddleware(consultationSchema),
  registerPatient
);

export default patientRouter;
