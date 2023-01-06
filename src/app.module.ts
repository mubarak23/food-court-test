import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandService } from './brand/brand.service';
import { BrandModule } from './brand/brand.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [BrandModule, DatabaseModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, BrandService],
})
export class AppModule {}
