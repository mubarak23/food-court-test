import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { CategoryModel } from 'src/database/Models/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CategoryModel') private CategoryClass: ModelClass<CategoryModel>,
  ) {}

  createCategory(props: Partial<CategoryModel>) {
    return this.CategoryClass.query().insert(props).returning('*');
  }

  findallCategories() {
    return this.CategoryClass.query();
  }
}
