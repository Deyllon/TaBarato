import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioController } from 'src/usuario/usuario.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { ComputadorRepository } from './repositories/computador.repository';

@Module({
    controllers:[UsuarioController],
    providers:[UsuarioService, PrismaService, ComputadorRepository]
})
export class ComputadorModule {}
