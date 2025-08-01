import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("organization_menu", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.integer("organization_id").unsigned().notNullable();
        table.foreign("organization_id").references("id").inTable("organizations").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("organization_menu");
}

