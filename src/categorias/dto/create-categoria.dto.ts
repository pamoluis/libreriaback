import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly nombre_categoria: String;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly estado_categoria: String;
}
