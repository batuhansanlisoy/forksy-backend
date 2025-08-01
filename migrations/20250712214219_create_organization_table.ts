import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("organizations", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("owner_name").notNullable();
        table.string("email").notNullable();
        table.string("phone").notNullable();
        table.string("adress").notNullable();
        table.string("city").notNullable();
        table.string("country").defaultTo("Türkiye");
        table.enu("subscription_type", ["free", "basic", "pro"]).defaultTo("free");
        table.boolean("is_active").defaultTo(true);
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("organizations");
}

