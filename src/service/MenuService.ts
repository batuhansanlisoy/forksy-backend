import { MenuRepository } from "../repository/MenuRepository";
import { Menu } from "../entity/MenuEntity";

export class MenuService {
    private repo = new MenuRepository();
    
    async getAll(): Promise<Menu[]> {
        return await this.repo.findAll();
    }

    async getById(id: number): Promise<Menu | undefined> {
        return await this.repo.findById(id);
    }
}