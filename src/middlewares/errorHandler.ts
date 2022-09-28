import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error) {
    if (error.type == "not_found") {
      return res.status(404).send(error.message);
    }
    if (error.type == "conflict") {
      return res.status(409).send(error.message);
    }
    if (error.type == "not_authorized") {
      return res.status(422).send(error.message);
    }
    if (error.type == "unauthorized") {
      return res.status(401).send(error.message);
    }
  }
  console.log(error);

  return res.status(500).send("Server error has ocurred!");
}
