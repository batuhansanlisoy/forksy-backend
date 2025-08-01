import { Request, Response } from "express";
import { CategoryService } from "../service/CategoryService";

const categoryService = new CategoryService();

export class CategoryController {
    
    async getAll(req: Request, res: Response) {
        try {
            const categories = await categoryService.getAll();
            res.json({ success: true, data: categories});
        } catch(err) {
            console.error(err);
            res.status(500).json({ success: false, message: "kategori verisi alınamadı!"});
        }
    }
    async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const category = await categoryService.getById(id);

      if (!category) {
        return res.status(404).json({ success: false, message: "Kategori bulunamadı" });
      }

      res.json({ success: true, data: category });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Kategori alınırken hata oluştu" });
    }
  }
}