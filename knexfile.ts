import type { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  staging: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
  },

  development: {
    client: 'postgresql',
    connection:
      'postgres://jlddxsjf:JMTFsdcaAUrBHxc_jKtHF54MtTB-vzMf@kandula.db.elephantsql.com/jlddxsjf', // process.env.DATABASE_URL
    // connection: {
    //   database: 'jlddxsjf',
    //   user: 'postgres',
    //   password: 'pass123',
    // },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

module.exports = config;
