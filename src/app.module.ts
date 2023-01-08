import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandService } from './brand/brand.service';
import { BrandModule } from './brand/brand.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    BrandModule,
    DatabaseModule,
    CategoryModule,
    AuthModule,
    PassportModule,
    JwtModule.register({ secret: 'secrete', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [AppController],
  providers: [AppService, BrandService, AuthService, JwtStrategy],
})
export class AppModule {}
