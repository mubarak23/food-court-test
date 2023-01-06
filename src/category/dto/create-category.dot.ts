import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  brandId: number;
}
