import { db } from "../db";
import { OrganizationCategory } from "../entity/OrganizationCategoryEntity";

export class OrganizationCategoryRepository {
    static async create(orgCategory: OrganizationCategory ) {
        const [id] = await db<OrganizationCategory>("organization_categories").insert(orgCategory);
        return {...orgCategory, id}
    }

    static async bulkCreate(orgCategory: OrganizationCategory[]) {
        return await db<OrganizationCategory>("organization_categories").insert(orgCategory);
    }
    // burası kullanılmıyor olabilir sonradan kaldrımak gerekebilir.
    static async findByOrganizationId(organizationId: number) {
        return await db<OrganizationCategory>("organization_categories").where("organization_id", organizationId);
    }

    static async findByOrganizationWithName(organizationId: number) {
        return await db("organization_categories as oc")
            .join("menu_categories as mc", "oc.menu_category_id", "mc.id")
            .where("oc.organization_id", organizationId)
            .select("mc.name as category_name");
    }
}