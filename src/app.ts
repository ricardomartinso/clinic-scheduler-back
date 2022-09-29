import cors from "cors";
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "./routers/router";

dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
