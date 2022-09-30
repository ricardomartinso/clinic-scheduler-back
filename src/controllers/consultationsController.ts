import { Request, Response } from "express";
import * as consultationService from "../services/consultationServices";

export async function scheduleConsultation(req: Request, res: Response) {
  res.status(201).send("Scheduled!");
}
