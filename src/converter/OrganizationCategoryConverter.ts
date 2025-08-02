// // converter/OrganizationCategoryConverter.ts

// import type { OrganizationCategory } from "../entity/OrganizationCategoryEntity";

// export interface OrganizationCategoryDTO {
//   id: number;
//   organizationId: number;
//   menuCategoryId: number;
//   categoryName: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

// export function toOrganizationCategoryDTO(
//   entity: OrganizationCategory,
//   categoryName: string
// ): OrganizationCategoryDTO {
//   return {
//     id: entity.id!,
//     organizationId: entity.organization_id,
//     menuCategoryId: entity.menu_category_id,
//     categoryName,
//     createdAt: entity.created_at,
//     updatedAt: entity.updated_at,
//   };
// }
