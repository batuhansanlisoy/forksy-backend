import { CategoryRepository } from "../repository/CategoryRespository";
import { Category } from "../entity/CategoryEntity";

export class CategoryService {
    private repo = new CategoryRepository();
    
    async getAll(): Promise<Category[]> {
        return await this.repo.findAll();
    }

    async getById(id: number): Promise<Category[] | undefined> {
        return await this.repo.findById(id);
    }
}