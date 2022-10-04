import { Router } from "express";
import {
  getConsultationsByDay,
  scheduleConsultation,
} from "../controllers/consultationsController";
import authenticateToken from "../middlewares/authenticateToken";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { authSchema } from "../schemas/authSchema";
import { consultationSchema } from "../schemas/consultationSchema";

const consultationRouter = Router();

consultationRouter.post(
  "/consultations",
  authenticateToken,
  validateSchemaMiddleware(consultationSchema),
  scheduleConsultation
);

consultationRouter.get(
  "/consultations/:date",
  authenticateToken,
  getConsultationsByDay
);

export default consultationRouter;
