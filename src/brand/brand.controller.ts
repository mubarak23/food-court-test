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
import { BrandService } from './brand.service';
import { CreateAddonDto } from './dto/create-addons.dto';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Post(':brandId/addons')
  async createBrandAddons(@Body() props: Partial<CreateAddonDto>) {
    return this.brandService.createBrandAddon(props);
  }

  @Post('new')
  async createBrand(@Body() props: Partial<CreateBrandDto>) {
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
