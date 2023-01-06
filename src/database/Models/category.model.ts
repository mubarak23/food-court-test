import { Model } from 'objection';
import { BaseModel } from './base.model';
import { BrandModel } from './brand.model';

export class CategoryModel extends BaseModel {
  static tableName = 'categories';
  name: string;
  brandId: number;

  // static get relationMappings() {
  //   return {
  //     brand: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: BrandModel,
  //       join: {
  //         from: 'Category.brandId',
  //         to: 'brands.id',
  //       },
  //     },
  //   };
  // }
}
