import { ApiProperty } from "@nestjs/swagger";

export class UpdatePersonaDto {
    @ApiProperty()
    readonly nombre_cliente: String;
    @ApiProperty()
    readonly celular: Number;
    @ApiProperty()
    readonly estado_cliente: String;
    @ApiProperty()
    readonly rol_id: String;
    @ApiProperty()
    readonly  usuario: usuarios[];
}

export class usuarios{
   @ApiProperty()
    readonly email: String;
  @ApiProperty()
    readonly clave: String;
}