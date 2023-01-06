import { Knex } from 'knex';

const tableName = 'categories';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (t) => {
    t.increments(), t.text('name');
    t.integer('brand_id').references('id').inTable('brands');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
