import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AddonsModel } from 'src/database/Models/addons.model';
import { BrandModel } from 'src/database/Models/brand.model';
import { CategoryModel } from 'src/database/Models/category.model';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Post(':brandId/addons')
  async createBrandAddons(@Body() props: Partial<AddonsModel>) {
    return this.brandService.createBrandAddon(props);
  }

  @Post('new')
  async createBrand(@Body() props: Partial<BrandModel>) {
    return this.brandService.createBrand(props);
  }

  @Get(':brandId/addons')
  async getBrandsAddons(@Param('brandId', new ParseIntPipe()) brandId: number) {
    const addons = await this.brandService.findBrandsAddons(brandId);
    return addons;
  }

  @Get('/all')
  async getAllBrands() {
    const addons = await this.brandService.findallBrand();
    return addons;
  }

  @Post('category')
  async createCategory(@Body() props: Partial<CategoryModel>) {
    return this.brandService.createCategory(props);
  }

  @Get('/category/all')
  async getAllCategories() {
    const addons = await this.brandService.findallCategories();
    return addons;
  }

  @Get(':brandId/addons/:addonId')
  async getAddons(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('addonId', new ParseIntPipe()) addonId: number,
  ) {
    const addons = await this.brandService.findSingleBrandAddon(
      addonId,
      brandId,
    );
    return addons;
  }

  @Delete(':addonId')
  async delete(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('addonId', new ParseIntPipe()) addonId: number,
  ) {
    return this.brandService.deleteBranddon(addonId, brandId);
  }

  @Put(':addonId')
  async editAddons(
    @Param('addonId', new ParseIntPipe()) addonId: number,
    props: Partial<AddonsModel>,
  ) {
    const updateAddons = await this.brandService.updateBrandAddons(
      addonId,
      props,
    );
    return updateAddons;
  }
}
