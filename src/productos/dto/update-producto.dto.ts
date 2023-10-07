import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductoDto {
@ApiProperty()
  // @IsString()
  readonly nombre: String;
@ApiProperty()
  // @IsString()
  readonly descripcion: String;
@ApiProperty()
  // @IsNumber()
  readonly precio: Number;
@ApiProperty()
  // @IsString()
  readonly autor: String;
@ApiProperty()
  // @IsString()
  readonly editorial: String;
@ApiProperty()
  // @IsString()
  readonly url_img: String;
@ApiProperty()
  // @IsString()
  readonly estado_producto: String;
  @ApiProperty()
  readonly fecha_reg: String;
  @ApiProperty()
  readonly id_categoria: String;

}
