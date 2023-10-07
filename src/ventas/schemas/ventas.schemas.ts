import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type VentasDocument = Ventas & Document;
@Schema()
export class Ventas {
  @Prop()
  fech_venta: String;
  @Prop()
  estado_ventas: String;
  @Prop()
  cliente_id: String;
  @Prop()
  detalle: detalles[];
  @Prop()
  total: Number;
}

export class detalles {
  @Prop()
  id_producto: String;
  @Prop()
  cantidad: Number;
  @Prop()
  precio_unitario: Number;
}

export const VentasSchema=SchemaFactory.createForClass(Ventas)
