import { Request, Response } from "express";
import * as consultationService from "../services/consultationServices";

export async function scheduleConsultation(req: Request, res: Response) {
  const consultation = req.body;
  const { id: userId } = res.locals.userData;

  const result = await consultationService.schedule(
    consultation.name,
    consultation.health_insurance,
    consultation.phone,
    consultation.turn,
    consultation.date,
    userId
  );

  res.status(201).send(result);
}

export async function getConsultationsByDay(req: Request, res: Response) {
  const { date } = req.params;
  const { id } = res.locals.userData;

  const result = await consultationService.getConsultationsByDay(date, id);

  res.status(200).send(result);
}
