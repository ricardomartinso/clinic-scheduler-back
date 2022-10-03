import { Request, Response } from "express";
import * as consultationService from "../services/consultationServices";

export async function scheduleConsultation(req: Request, res: Response) {
  const consultation = req.body;

  const result = await consultationService.schedule(
    consultation.patientName,
    consultation.phone,
    consultation.turn,
    consultation.date
  );

  res.status(201).send(result);
}
