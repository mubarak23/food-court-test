import { BaseModel } from './base.model';

export class AddonsModel extends BaseModel {
  static tableName = 'addons';
  name: string;
  description: string;
  price: number;
  brandId: number;
  category: string;
}
