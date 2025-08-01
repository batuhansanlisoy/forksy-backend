import { Request, Response } from "express";
import { MenuService } from "../service/MenuService";

const menuService = new MenuService();

export class MenuController {
    
    async getAll(req: Request, res: Response) {
        try {
            const menus = await menuService.getAll();
            res.json({ success: true, data: menus});
        } catch(err) {
            console.error(err);
            res.status(500).json({ success: false, message: "Menu verisi alınamadı!"});
        }
    }
    async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const menu = await menuService.getById(id);

      if (!menu) {
        return res.status(404).json({ success: false, message: "Kategori bulunamadı" });
      }

      res.json({ success: true, data: menu });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Kategori alınırken hata oluştu" });
    }
  }
}