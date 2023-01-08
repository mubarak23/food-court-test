import { Inject, Injectable } from '@nestjs/common';
import { ModelClass } from 'objection';
import { AddonsModel } from 'src/database/Models/addons.model';
import { BrandModel } from 'src/database/Models/brand.model';
import { CategoryModel } from 'src/database/Models/category.model';

@Injectable()
export class BrandService {
  constructor(
    @Inject('AddonsModel') private AddonClass: ModelClass<AddonsModel>,
    @Inject('BrandModel') private BrandClass: ModelClass<BrandModel>,
    @Inject('CategoryModel') private CategoryClass: ModelClass<CategoryModel>,
  ) {}

  // pull all addon base on a brands
  findBrandsAddons(brandId: number) {
    return this.AddonClass.query().where('brandId', brandId);
  }

  findSingleBrandAddon(id: number, brandId: number) {
    return this.AddonClass.query().findOne({ id, brandId });
  }

  createBrandAddon(props: Partial<AddonsModel>, brandId: number) {
    const addons = { brandId, ...props };
    return this.AddonClass.query().insert(addons).returning('*');
  }

  createBrand(props: Partial<BrandModel>) {
    return this.BrandClass.query().insert(props).returning('*');
  }

  findallBrand() {
    return this.BrandClass.query();
  }
  findSingleBrand(id: number) {
    return this.BrandClass.query().findById(id);
  }

  createCategory(props: Partial<CategoryModel>) {
    return this.CategoryClass.query().insert(props).returning('*');
  }

  findallCategories() {
    return this.CategoryClass.query();
  }

  updateBrandAddons(id: number, props: Partial<AddonsModel>) {
    return this.AddonClass.query()
      .where({ id })
      .update(props)
      .returning('*')
      .first();
  }
  deleteBranddon(id: number, brandId: number) {
    return this.AddonClass.query()
      .delete()
      .where({ id, brandId })
      .returning('*')
      .first();
  }
}
