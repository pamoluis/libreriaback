import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type PersonasDocument = Personas & Document;

@Schema() 
export class Personas{
    @Prop()
    nombre_cliente: String;
    
    @Prop()
    celular: Number;

    @Prop()
    estado_cliente: String;

    @Prop()
    usuario: usuario[];

    @Prop()
    rol_id: String;
}

export class usuario{
        @Prop()
        email: String;
        @Prop()
        clave: String;
}

export const PersonasSchema=SchemaFactory.createForClass(Personas);