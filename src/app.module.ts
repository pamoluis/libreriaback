import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from './roles/roles.module';
import { VentasModule } from './ventas/ventas.module';
import { PersonasModule } from './personas/personas.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://luispamo:pamo1234@cluster0.va4wujw.mongodb.net/lib?retryWrites=true&w=majority'),
    // MongooseModule.forRoot('mongodb://localhost/libreria'),
    CategoriasModule,
    ProductosModule,
    RolesModule,
    VentasModule,
    PersonasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
