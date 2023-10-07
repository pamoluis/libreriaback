import { ApiProperty } from '@nestjs/swagger';


export class UpdateRoleDto  {

    @ApiProperty()
    readonly nombre_rol:String;

    @ApiProperty()
    readonly estado: String
}
