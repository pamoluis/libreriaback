import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePersonaDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly nombre_cliente: String;
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly celular: Number;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly estado_cliente: String;
       
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly  usuario: usuario[];

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly rol_id: String;
}

export class usuario{
    
    @IsNotEmpty()
    @IsString()
    readonly email: String;
   
    @IsNotEmpty()
    @IsString()
    readonly clave: String;
}
