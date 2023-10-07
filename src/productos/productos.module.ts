import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Productos, ProductosSchema } from './schemas/productos.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Productos.name,
        schema: ProductosSchema,
      },
    ]),
  ],

  controllers: [ProductosController],

  providers: [ProductosService],
})
export class ProductosModule {}
