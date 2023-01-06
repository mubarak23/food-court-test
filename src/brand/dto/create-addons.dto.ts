import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateAddonDto {
  @IsNotEmpty()
  name: string;

  @IsEmpty()
  description!: string;

  @IsNotEmpty()
  price: number;

  @IsEmpty()
  category: string;
}
