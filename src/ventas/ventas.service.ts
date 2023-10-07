import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Ventas, VentasDocument } from './schemas/ventas.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VentasService {
  constructor(
    @InjectModel(Ventas.name) private ventasModule: Model < VentasDocument>
    ){}

  async create(createVentaDto: CreateVentaDto) {
    const categoria = await this.ventasModule.create(createVentaDto);
    return categoria;
  }

  async findAll() {
    const categoria = await this.ventasModule.find();
    return categoria;
  }

  async findOne(id: string) {
    const categoria = await this.ventasModule.findById(id);
    if(!categoria) throw new NotFoundException(`El ID: ${id} no existe`)
  return categoria;
  }

  async update(id: string, updateVentaDto: UpdateVentaDto) {
    const categoria = await this.ventasModule.findByIdAndUpdate(id,updateVentaDto,{new : true})
    if(!categoria) throw new NotFoundException(`El ID: ${id} no existe`)
    return categoria;
  }

  async remove(id: string) {
    const categoria = await this.ventasModule.findByIdAndDelete(id);
    if(!categoria) throw new NotFoundException(`El ID: ${id} no existe`)
    return categoria;
  }
}
