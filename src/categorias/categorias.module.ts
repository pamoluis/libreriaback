import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Categorias, CategoriasSchema } from './schemas/categorias.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:Categorias.name,
        schema: CategoriasSchema,
      }
    ])
  ],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
