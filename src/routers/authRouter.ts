import { Router } from "express";
import { login, signUp } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { authSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(authSchema), signUp);
authRouter.post("/login", validateSchemaMiddleware(authSchema), login);

export default authRouter;
