import { create, findByEmail } from "../repositories/authRepository";
import { AuthUser } from "../types/authTypes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { conflictError, unauthorizedError } from "../utils/errorUtils";
import dotenv from "dotenv";
dotenv.config();
export async function createUser(user: AuthUser) {
  await verifyEmailCreation(user.email);

  const encryptedUser = {
    email: user.email,
    password: bcrypt.hashSync(user.password, 10),
  };

  await create(encryptedUser);

  return user;
}

export async function loginUser(user: AuthUser) {
  const userData = await findByEmail(user.email);

  if (!userData) return unauthorizedError("Invalid email or password");

  verifyValidPassword(user.password, userData.password as string);

  const token = jwt.sign({ userData }, process.env.SECRET_KEY as string);

  return token;
}

async function verifyEmailCreation(email: string) {
  const existEmail = await findByEmail(email);

  if (existEmail) throw conflictError("User already registered!");
}

function verifyValidPassword(userPassword: string, encryptedPassword: string) {
  if (!bcrypt.compareSync(userPassword, encryptedPassword)) {
    return unauthorizedError("Invalid email or password");
  }
}
