import type { User } from "../types/user";
import { db } from "../db";

export async function createUser(
    data: Omit<User, "id" | "created_at" | "updated_at">
): Promise<User> {
    const [created] = await db<User>("users").insert(data).returning("*");
    return created;
}
