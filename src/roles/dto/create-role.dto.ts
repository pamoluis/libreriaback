import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly nombre_rol:String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly estado: String
}
