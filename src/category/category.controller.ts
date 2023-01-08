import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
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
  @Post('/:brandId')
  async createCategory(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Body() props: Partial<CreateCategoryDto>,
  ) {
    return this.categoryService.createCategory(props, brandId);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('/all')
  async getAllCategories() {
    const addons = await this.categoryService.findallCategories();
    return addons;
  }
}
