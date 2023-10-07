import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Roles, RolesDocument } from './schemas/roles.schemas';
import { Model } from 'mongoose';

@Injectable()
export class RolesService {
constructor(@InjectModel (Roles.name) private rolesModule : Model<RolesDocument>){}

  async create(createRoleDto: CreateRoleDto) {
    const rol = await this.rolesModule.create(createRoleDto);
    return rol;
  }

  async findAll() {
    const rol = await this.rolesModule.find();
    return rol;
  }

  async findOne(id: string) {
    const rol = await this.rolesModule.findById(id);
      if(!rol) throw new NotFoundException(`El ID: ${id} no existe`)
    return rol;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const rol = await this.rolesModule.findByIdAndUpdate(id,updateRoleDto,{new : true})
    if(!rol) throw new NotFoundException(`El ID: ${id} no existe`)
    return rol;
  }

  async remove(id: string) {
    const rol = await this.rolesModule.findByIdAndDelete(id);
    if(!rol) throw new NotFoundException(`El ID: ${id} no existe`)
    return rol;
  }
}
