import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Personas, PersonasSchema } from './schemas/personas.schemas';

@Module({
  imports: [
MongooseModule.forFeature([
  {
    name:Personas.name,
    schema:PersonasSchema,
  }
])
  ],
  controllers: [PersonasController],
  providers: [PersonasService],
})
export class PersonasModule {}
