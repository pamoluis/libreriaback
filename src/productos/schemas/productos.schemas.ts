import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductosDocument = Productos & Document;

@Schema()
export class Productos {
  @Prop()
  nombre: String;

  @Prop()
  descripcion: String;

  @Prop()
  precio: Number;

  @Prop()
  autor: String;

  @Prop()
  editorial: String;

  @Prop()
  url_img: String;

  @Prop()
  estado_producto: String;

  @Prop()
  fecha_reg: String;

  @Prop()
  id_categoria: String;
}

export const ProductosSchema = SchemaFactory.createForClass(Productos);
