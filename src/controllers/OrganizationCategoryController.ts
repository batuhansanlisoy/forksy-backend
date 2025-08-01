import { Request, Response } from "express";
import { OrganizationCategoryService } from "../service/OrganizationCategoryService";

const service = new OrganizationCategoryService();

export class OrganizationCategoryController {
    async create (req: Request, res: Response): Promise<void> {
        try {
            const orgCategory = req.body; // dışarıdan gelen veri postman ya da formdan
            const result = await service.createOrgCategory(orgCategory);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: "Hata meydana geldi" });
        }
    }
}