import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ComputadorController } from './computador/computador.controller';
import { ComputadorService } from './computador/computador.service';
import { ComputadorModule } from './computador/computador.module';

@Module({
  imports: [UsuarioModule, ComputadorModule],
  controllers: [AppController, UsuarioController, ComputadorController],
  providers: [AppService, UsuarioService, ComputadorService],
})
export class AppModule {}
