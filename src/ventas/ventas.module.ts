import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ventas, VentasSchema } from './schemas/ventas.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:Ventas.name,
        schema: VentasSchema,
      }
    ])
  ],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
