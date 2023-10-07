import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVentaDto {

    @ApiProperty()
  @IsNotEmpty()
  @IsString()
readonly  fech_venta: String;
    @ApiProperty()
  @IsNotEmpty()
  @IsString()
readonly  estado_ventas: String;
    @ApiProperty()
  @IsNotEmpty()
  @IsString()
readonly  cliente_id: String;
    @ApiProperty()
  @IsNotEmpty()
  @IsString()
readonly  detalle: detalles[];
    @ApiProperty()
  @IsNotEmpty()
  @IsString()
readonly  total: Number;
}

export class detalles {
    @ApiProperty()
  @IsNotEmpty()
  @IsString()
readonly  id_producto: String;
    @ApiProperty()
  @IsNotEmpty()
  @IsString()
readonly  cantidad: Number;
    @ApiProperty()
  @IsNotEmpty()
  @IsString()
readonly  precio_unitario: Number;
}