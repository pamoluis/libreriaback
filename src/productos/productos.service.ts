import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Productos, ProductosDocument } from './schemas/productos.schemas';


@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Productos.name) private productosModule: Model<ProductosDocument>
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const createproductos= await this.productosModule.create(createProductoDto)
    return createproductos
  }

  async findAll(): Promise<Productos[]> {
    const producto = await this.productosModule.find();
    return producto;
  }

  async findOne(id: string) {
    const producto= await this.productosModule.findById(id)
    if(!producto) throw new NotFoundException(`El ID: ${id} no existe`)
  return producto
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    const producto = await this.productosModule.findByIdAndUpdate(id,updateProductoDto,{new : true})
    if(!producto) throw new NotFoundException(`El ID: ${id} no existe`)
    return producto
  }

  async remove(id: string) {
    const producto = await this.productosModule.findByIdAndDelete(id)
    if(!producto) throw new NotFoundException(`El ID: ${id} no existe`)
    return producto
  }
}
