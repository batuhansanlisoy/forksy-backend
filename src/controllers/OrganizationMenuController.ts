import { Request, Response } from "express";
import { OrganizationMenuService } from "../service/OrganizationMenuService";

const menuService = new OrganizationMenuService();

export class OrganizationMenuController {
  async create(req: Request, res: Response) {
    try {
      const menu = req.body;
      const result = await menuService.createMenu(menu);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Menu oluşturulamadı." });
    }
  }

  async getByOrganization(req: Request, res: Response) {
    try {
      const organizationId = Number(req.params.organizationId);
      const result = await menuService.getMenusByOrganization(organizationId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Menüler alınamadı." });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await menuService.deleteMenu(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: "Menu silinemedi." });
    }
  }
}
