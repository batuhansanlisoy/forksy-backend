import { db } from "../db"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { User } from "../types/user";

const JWT_SECRET = process.env.JWT_SECRET || "gizlikelime123";

interface LoginPayload {
    email: string,
    password: string
}

export async function loginUser({ email, password}: LoginPayload) {
    // KUllanıcıyı email ile bulur
    const user = await db<User>("users").where({ email }).first();

    if (!user) {
        throw new Error("Kullanıcı Bulunamadı!");

    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error("Şifre yanlış");
    }

    // JWT TOKEN JSON WEB TOKEN
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,        
    },
    JWT_SECRET,
    { expiresIn: "1d"}
    );

    return { token, user: {
        id: user.id,
        name: user.name,
        email: user.email,
        organization: user.organization_id
    } }

}