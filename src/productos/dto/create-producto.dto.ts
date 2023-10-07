import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly nombre: String;
@ApiProperty()
  @IsString()
  readonly descripcion: String;
@ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly precio: Number;
@ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly autor: String;
@ApiProperty()
  @IsString()
  readonly editorial: String;
@ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly url_img: String;
@ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly estado_producto: String;
@ApiProperty()
@IsNotEmpty()
@IsNumber()
  readonly fecha_reg: String;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
    readonly id_categoria: String;

}
