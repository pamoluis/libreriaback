import { ApiProperty } from "@nestjs/swagger";

export class UpdateVentaDto {
@ApiProperty()
    readonly fech_venta: String;
    @ApiProperty()
    readonly estado_ventas: String;
    @ApiProperty()
    readonly cliente_id: String;
    @ApiProperty()
    readonly detalle: detalles[];
    @ApiProperty()
    readonly total: Number;
  }

  export class detalles {
    @ApiProperty()
    readonly id_producto: String;
    @ApiProperty()
    readonly cantidad: Number;
    @ApiProperty()
    readonly precio_unitario: Number;
  }

