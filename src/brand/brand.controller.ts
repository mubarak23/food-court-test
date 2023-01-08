import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { BrandService } from './brand.service';
import { CreateAddonDto } from './dto/create-addons.dto';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateAddonDto } from './dto/update-addons.dto';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post(':brandId/addons')
  async createBrandAddons(
    @Req() req,
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Body() props: Partial<CreateAddonDto>,
  ) {
    const brandExist = await this.brandService.findSingleBrand(brandId);
    if (!brandExist) {
      throw new NotFoundException('brand Does not Exist');
    }
    return this.brandService.createBrandAddon(props, brandExist.id);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('new')
  async createBrand(@Req() req, @Body() props: Partial<CreateBrandDto>) {
    return this.brandService.createBrand(props);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(':brandId/addons')
  async getBrandsAddons(
    @Req() req,
    @Param('brandId', new ParseIntPipe()) brandId: number,
  ) {
    const brandExist = await this.brandService.findSingleBrand(brandId);
    if (!brandExist) {
      throw new NotFoundException('brand Does not Exist');
    }
    const addons = await this.brandService.findBrandsAddons(brandId);
    return addons;
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('/all')
  async getAllBrands(@Req() req) {
    const addons = await this.brandService.findallBrand();
    return addons;
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(':brandId/addons/:addonId')
  async getAddons(
    @Req() req,
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('addonId', new ParseIntPipe()) addonId: number,
  ) {
    const addon = await this.brandService.findSingleBrandAddon(
      addonId,
      brandId,
    );
    if (!addon) {
      throw new NotFoundException('Addon Does not Exist');
    }
    return addon;
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':brandId/addons/:addonId')
  async delete(
    @Req() req,
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('addonId', new ParseIntPipe()) addonId: number,
  ) {
    return this.brandService.deleteBranddon(addonId, brandId);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put(':brandId/addons/:addonId')
  async editAddons(
    @Req() req,
    @Param('addonId', new ParseIntPipe()) addonId: number,
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Body() props: Partial<UpdateAddonDto>,
  ) {
    const addon = await this.brandService.findSingleBrandAddon(
      addonId,
      brandId,
    );
    if (!addon) {
      throw new NotFoundException('Addon Does not  Belong the brand');
    }
    const updateAddons = await this.brandService.updateBrandAddons(
      addonId,
      props,
    );
    return updateAddons;
  }
}
