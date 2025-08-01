import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("menu", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.text("description").nullable();
        table.integer("category_id").unsigned().references("id").inTable("menu_categories").onDelete("CASCADE");
        table.decimal("price", 10, 2).notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("menu");
}

