// services/loginOrganization.ts
import { db } from "../db";
import jwt from "jsonwebtoken";
import { comparePasswords } from "../utils/hash";
import { Organization } from "../types/organization";

const JWT_SECRET = process.env.JWT_SECRET || "gizlikelime123";

interface LoginPayload {
  email: string;
  password: string;
}

export async function loginOrganization({ email, password }: LoginPayload) {
  const org = await db<Organization>("organizations").where({ email }).first();

  if (!org) {
    throw new Error("Organizasyon bulunamadı!");
  }

  const isValid = await comparePasswords(password, org.password);
  if (!isValid) {
    throw new Error("Şifre yanlış!");
  }

  const token = jwt.sign(
    {
      id: org.id,
      email: org.email,
      name: org.name,
    },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    organization: {
      id: org.id,
      name: org.name,
      email: org.email,
      subscription_type: org.subscription_type,
    },
  };
}
