import { Router } from "express";
import { scheduleConsultation } from "../controllers/consultationsController";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { authSchema } from "../schemas/authSchema";

const consultationRouter = Router();

consultationRouter.post(
  "/consultation",
  validateSchemaMiddleware(authSchema),
  scheduleConsultation
);

export default consultationRouter;
