import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dot';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('')
  async createCategory(@Body() props: Partial<CreateCategoryDto>) {
    return this.categoryService.createCategory(props);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('/all')
  async getAllCategories() {
    const addons = await this.categoryService.findallCategories();
    return addons;
  }
}
