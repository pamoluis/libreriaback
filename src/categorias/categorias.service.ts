import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Categorias, CategoriasDocument } from './schemas/categorias.schemas';
import { Model } from 'mongoose';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel(Categorias.name) private categoriasModule: Model < CategoriasDocument>
    ){}
  
  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = await this.categoriasModule.create(createCategoriaDto);
    return categoria;
  }

  async findAll() {
    const categoria = await this.categoriasModule.find();
    return categoria;
  }

  async findOne(id: string) {
      const categoria = await this.categoriasModule.findById(id);
      if(!categoria) throw new NotFoundException(`El ID: ${id} no existe`)
    return categoria;
  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.categoriasModule.findByIdAndUpdate(id,updateCategoriaDto,{new : true})
    if(!categoria) throw new NotFoundException(`El ID: ${id} no existe`)
    return categoria;
  }

  async remove(id: string) {
    const categoria = await this.categoriasModule.findByIdAndDelete(id);
    if(!categoria) throw new NotFoundException(`El ID: ${id} no existe`)
    return categoria;
  }
}
