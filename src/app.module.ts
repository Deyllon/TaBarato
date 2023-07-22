import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ComputadorModule } from './computador/computador.module';

@Module({
  imports: [UsuarioModule, ComputadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
