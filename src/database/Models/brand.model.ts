import { Model } from 'objection';
import { BaseModel } from './base.model';

export class BrandModel extends BaseModel {
  static tableName = 'brands';
  name: string;

  static get relationMappings() {
    return {
      category: {
        relation: Model.HasManyRelation,
        modelClass: BrandModel,
        join: {
          from: 'Category.brandId',
          to: 'brands.id',
        },
      },
    };
  }
}
