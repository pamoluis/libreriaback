import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CategoriasDocument = Categorias & Document;

@Schema()
export class Categorias {
  @Prop()
  nombre_categoria: String;
  @Prop()
  estado_categoria: String;
}

export const CategoriasSchema = SchemaFactory.createForClass(Categorias);