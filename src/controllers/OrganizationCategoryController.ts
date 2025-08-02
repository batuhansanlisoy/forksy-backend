import { Request, Response } from "express";
import { OrganizationCategoryService } from "../service/OrganizationCategoryService";
import { data } from "autoprefixer";

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

    async bulkCreate (req: Request, res: Response): Promise<void> {
        try {
            const { organization_id, items } = req.body;
            
            if (!organization_id || !Array.isArray(items) || items.length === 0) {
                res.status(400).json({ error: "Geçersiz Veri Yapısı" });
                return;
            }
            //items dizisindeki her öğeyi tabloya uygun hale getiriyoruz 
            const orgCategories = items.map((item: { id: number }) => ({
            organization_id,
            menu_category_id: item.id,
            }));

            const result = await service.bulkCreate(orgCategories);
            res.status(201).json({ message: "Başarıyla kayıt edildi", data: result });            
        } catch (error) {
            console.error("bulkCreate error:", error);
            res.status(500).json({ error: "Hata meydana geldi" });
        }
    }

    async findByOrganizationId (req: Request, res: Response): Promise<void> {
        try {
            const organizationId = Number(req.params.organizationId);

            if (!organizationId) {
                res.status(400).json({ error: "Geçersiz Organization Verisi" });
                return;
            }

            const categories = await service.findByOrganizationId(organizationId);
            res.status(200).json({ data: categories });
        } catch (error) {
            console.error("Try Catch hatası", error);
            res.status(500).json({ error: "Veri alınırken bir hata meydana geldi" });
        }
    }

    async getCategoryNames (req: Request, res: Response): Promise<void> {
        try{
            const organizationId = Number(req.params.organizationId);

            if (!organizationId) {
                res.status(400).json({ error: "Organizasyon Id' si Bulunamadı" });
                return;
            }
            
            const categoryName = await service.getCategoryNamesByOrganizationId(organizationId);
            res.json(categoryName);

        } catch (error) {
            console.error("Kategori isimleri getirilemedi", error);
            res.status(500).json({ error: "Hata Meydana Geldi" })
        }
    }
}