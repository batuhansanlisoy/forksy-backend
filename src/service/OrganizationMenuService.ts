import { OrganizationMenuRepository } from "../repository/OrganizationMenuRepository";
import { OrganizationMenu } from "../entity/organizationMenuEntity";

export class OrganizationMenuService {
  async createMenu(menu: OrganizationMenu) {
    return OrganizationMenuRepository.create(menu);
  }

  async getMenusByOrganization(organizationId: number) {
    return OrganizationMenuRepository.findByOrganization(organizationId);
  }

  async deleteMenu(id: number) {
    return OrganizationMenuRepository.delete(id);
  }
}

