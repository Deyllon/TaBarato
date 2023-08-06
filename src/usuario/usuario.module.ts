import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from './repositories/user.repository';
import { UsuarioController } from './usuario.controller';



@Module({
    controllers:[UsuarioController],
    providers:[UsuarioService, PrismaService, UserRepository],

})
export class UsuarioModule {}
