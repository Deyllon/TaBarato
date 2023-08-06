import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


import { ComputadorRepository } from './repositories/computador.repository';
import { ComputadorController } from './computador.controller';
import { ComputadorService } from './computador.service';

@Module({
    controllers:[ComputadorController],
    providers:[ PrismaService, ComputadorRepository, ComputadorService]
})
export class ComputadorModule {}
