import { Global, Module } from '@nestjs/common';
import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { BrandModel } from './Models/brand.model';
import { CategoryModel } from './Models/category.model';
import { AddonsModel } from './Models/addons.model';

const models = [BrandModel, CategoryModel, AddonsModel];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = Knex({
        client: 'pg',
        connection: 'postgres://postgres:pass123@localhost:5432/addons', // process.env.DATABASE_URL,
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers(),
      });

      Model.knex(knex);
      return knex;
    },
  },
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
