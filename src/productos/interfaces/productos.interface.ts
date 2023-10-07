import { Document } from "mongoose";

export interface Productos extends Document {
   readonly  producto_id : Number;
    readonly nombre:String;
    readonly descripcion:String;
    readonly precio:Number;
    readonly autor:String;
    readonly editorial:String;
    readonly url_img:String;
    readonly estado_producto:String;
}
