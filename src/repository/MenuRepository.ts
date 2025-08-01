import { Menu } from "../entity/MenuEntity";
import { db } from "../db";
 
export class MenuRepository {

    async findAll(): Promise<Menu[]> {
        return await db<Menu>("menu").select("*");
    }
    async findById(id: number): Promise<Menu | undefined> {
        const result = await db<Menu>("menu").where({id}).first();
        return result;
    }
}