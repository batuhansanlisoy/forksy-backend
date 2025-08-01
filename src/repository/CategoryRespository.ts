import { Category } from "../entity/CategoryEntity";
import { db } from "../db";
 
export class CategoryRepository {
    async findAll(): Promise<Category[]> {
        return await db<Category>("menu_categories").select("*");
    }
    async findById(id: number): Promise<Category | undefined> {
        const result = await db<Category>("menu_categories").where({id}).first();
        return result;
    }
}

