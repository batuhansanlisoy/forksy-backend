import { db } from "../db";
import { OrganizationMenu } from "../entity/organizationMenuEntity";

export class OrganizationMenuRepository {
  static async create(menu: OrganizationMenu) {
    const [id] = await db<OrganizationMenu>("organization_menu").insert(menu);
    return { ...menu, id };
  }

  static async findByOrganization(organizationId: number) {
    return db<OrganizationMenu>("organization_menu").where({ organization_id: organizationId });
  }

  static async delete(id: number) {
    return db<OrganizationMenu>("organization_menu").where({ id }).del();
  }
}
