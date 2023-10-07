import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RolesDocument = Roles & Document;

@Schema()
export class Roles{

    @Prop()
    nombre_rol:String;

    @Prop()
    estado: String

}

export const RolesSchema = SchemaFactory.createForClass(Roles);