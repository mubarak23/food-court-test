import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { CategoryModel } from 'src/database/Models/category.model';
import { CreateCategoryDto } from './dto/create-category.dot';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CategoryModel') private CategoryClass: ModelClass<CategoryModel>,
  ) {}

  createCategory(props: Partial<CreateCategoryDto>, brandId: number) {
    return this.CategoryClass.query().insert(props).returning('*');
  }

  findallCategories() {
    return this.CategoryClass.query();
  }
}
