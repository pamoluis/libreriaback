import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Personas, PersonasDocument } from './schemas/personas.schemas';
import { Model } from 'mongoose';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Injectable()
export class PersonasService {
  constructor (@InjectModel (Personas.name) private personasModule: Model <PersonasDocument>){}
 
 async create(createPersonaDto: CreatePersonaDto) {
    const persona = await this.personasModule.create(createPersonaDto);
    return persona;
    
  }

 async findAll() {
  const persona = await this.personasModule.find()
    return persona;
  }

 async findOne(id: string) {
  const persona = await this.personasModule.findById(id);
  if(!persona) throw new NotFoundException (`El ID: ${id} no existe`);
    return persona;
  }

 async update(id: string, updatePersonaDto: UpdatePersonaDto) {
    const persona = await this.personasModule.findByIdAndUpdate(id,updatePersonaDto,{new : true});
    if(!Categoria) throw new NotFoundException(`El ID:${id} no existe`)
  return 
    
  }

 async remove(id: string) {
    const persona = await this.personasModule.findByIdAndDelete(id);
    if(!persona) throw new NotFoundException(`El ID: ${id} no existe`);
    return persona;
  }
}
