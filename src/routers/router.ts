import { Router } from "express";
import authRouter from "./authRouter";
import consultationRouter from "./consultationRouter";
import patientRouter from "./patientRouter";

const router = Router();

router.use(authRouter);
router.use(consultationRouter);
router.use(patientRouter);

export default router;
