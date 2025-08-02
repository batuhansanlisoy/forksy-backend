import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("users", (table) => {
        table.integer("organization_id").unsigned().references("id").inTable("organizations")
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("users", (table) => {
    table.dropForeign("organization_id");  // Önce foreign key kaldırılır
    table.dropColumn("organization_id");   // Sonra sütun silinir
  });
}


