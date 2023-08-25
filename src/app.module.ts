import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ComputadorModule } from './computador/computador.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ChatsModule } from './chats/chats.module';



@Module({
  imports: [UsuarioModule, ComputadorModule, AuthModule, ChatsModule],
  controllers: [AppController],
  providers: [AppService,  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
})
export class AppModule {}
