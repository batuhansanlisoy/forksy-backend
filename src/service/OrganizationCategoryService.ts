import { OrganizationCategoryRepository } from "../repository/OrganizationCategoryRepository";
import { OrganizationCategory } from "../entity/OrganizationCategoryEntity"; 

export class OrganizationCategoryService {
    async createOrgCategory (orgCategory: OrganizationCategory) {
        return OrganizationCategoryRepository.create(orgCategory);
    }

    async bulkCreate (orgCategory: OrganizationCategory[]) {
        return OrganizationCategoryRepository.bulkCreate(orgCategory);
    }

    async findByOrganizationId (organizationId: number) {
        return OrganizationCategoryRepository.findByOrganizationId(organizationId);
    }
    
    async getCategoryNamesByOrganizationId (organizationId: number): Promise<{category_name: string}[]>{
        return OrganizationCategoryRepository.findByOrganizationWithName(organizationId);
    }
}