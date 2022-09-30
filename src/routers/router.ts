import { Router } from "express";
import authRouter from "./authRouter";
import consultationRouter from "./consultationRouter";

const router = Router();

router.use(authRouter);
router.use(consultationRouter);

export default router;
