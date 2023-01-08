import { IsEmpty } from 'class-validator';

export class UpdateAddonDto {
  @IsEmpty()
  name: string;

  @IsEmpty()
  description!: string;

  @IsEmpty()
  price: number;

  @IsEmpty()
  category: string;
}
