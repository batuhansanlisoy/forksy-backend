import { OrganizationCategoryRepository } from "../repository/OrganizationCategoryRepository";
import { OrganizationCategory } from "../entity/OrganizationCategoryEntity"; 

export class OrganizationCategoryService {
    async createOrgCategory (orgCategory: OrganizationCategory) {
        return OrganizationCategoryRepository.create(orgCategory);
    }
}