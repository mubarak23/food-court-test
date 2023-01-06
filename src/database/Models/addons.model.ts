import { Model } from 'objection';
import { BaseModel } from './base.model';
import { BrandModel } from './brand.model';
import { CategoryModel } from './category.model';

export class AddonsModel extends BaseModel {
  static tableName = 'addons';
  name: string;
  description: string;
  price: number;
  brandId: number;
  category: string;
}
