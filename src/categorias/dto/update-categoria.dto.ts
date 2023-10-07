import { ApiProperty } from "@nestjs/swagger";

export class UpdateCategoriaDto {
  @ApiProperty() 
  readonly nombre_categoria?: String;
  @ApiProperty()
  readonly estado_categoria?: String;
}
