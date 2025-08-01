import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("organization_categories", (table) => {
        table.increments("id").primary();
        table.integer("menu_category_id").unsigned().notNullable().references("id").inTable("menu_categories").onDelete("CASCADE");
        table.integer("organization_id").unsigned().notNullable().references("id").inTable("organizations").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("organization_categories");
}

