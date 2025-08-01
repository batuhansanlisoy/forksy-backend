import type { Organization } from "../types/organization";
import { db } from "../db"
import { hashPassword } from "../utils/hash";

export async function getAllOrganizations(): Promise<Organization[]> {
    return await db<Organization>("organizations").select("*");
}

export async function getOrganizationById(id: number): Promise<Organization | null> {
    const org = await db<Organization>("organizations").where({ id }).first();
    return org || null;
}

export async function createOrganization(
    data: Omit<Organization, "id" | "created_at" | "updated_at">
): Promise<Organization> {
    
    const hashedPassword = await hashPassword(data.password);

    const newData = { ...data, password: hashedPassword };

    const [created] = await db<Organization>("organizations")
        .insert(newData)
        .returning("*");
    return created;
}

export async function updateOrganization(
    id: number,
    data: Partial<Omit<Organization, "id" | "created_at" | "updated_at">>
): Promise<number> {
    return await db("organizations").where({ id }).update(data);
}

export async function deleteOrganization(id: number): Promise<number> {
    return await db("organizations").where({ id }).delete();
}