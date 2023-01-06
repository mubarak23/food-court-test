import { Model } from 'objection';
import { BaseModel } from './base.model';
import { BrandModel } from './brand.model';
import { CategoryModel } from './category.model';

export class AddonsModel extends BaseModel {
  static tableName = 'addons';
  name: string;
  description: string;
  price: string;
  brandId: number;
  categoryId: number;

  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: CategoryModel,
        join: {
          from: 'addons.categoryId',
          to: 'categories.id',
        },
      },
      brand: {
        relation: Model.BelongsToOneRelation,
        modelClass: BrandModel,
        join: {
          from: 'addons.brandId',
          to: 'brands.id',
        },
      },
    };
  }
}
