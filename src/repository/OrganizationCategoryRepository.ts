import { db } from "../db";
import { OrganizationCategory } from "../entity/OrganizationCategoryEntity";

export class OrganizationCategoryRepository {
    static async create(orgCategory: OrganizationCategory ) {
        const [id] = await db<OrganizationCategory>("organization_categories").insert(orgCategory);
        return {...orgCategory, id}
    }
}