import { Request, Response } from "express";
import * as consultationService from "../services/consultationServices";
import { patientRegister } from "../services/patientServices";
import { CreatePatient } from "../types/patientTypes";

export async function registerPatient(req: Request, res: Response) {
  const patient: CreatePatient = req.body;

  await patientRegister(patient);

  res.status(201).send("Patient created!");
}
