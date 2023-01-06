import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dot';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('')
  async createCategory(@Body() props: Partial<CreateCategoryDto>) {
    return this.categoryService.createCategory(props);
  }

  @Get('/all')
  async getAllCategories() {
    const addons = await this.categoryService.findallCategories();
    return addons;
  }
}
