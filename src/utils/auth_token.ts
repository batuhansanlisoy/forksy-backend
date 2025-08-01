import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "my_secret_key";

export function generateToken(organizationId: number): string {
    return jwt.sign({ id: organizationId }, JWT_SECRET, { expiresIn: "1d" });
}

export function verifyToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
}