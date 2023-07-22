import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ComputadorEntity } from '../entities/computador.entity';
import { CreateComputadorDto } from '../dto/createComputador.dto';
import { Prisma } from '@prisma/client';
import { UpdateComputadorDto } from '../dto/updateComputador.dto';


@Injectable()
export class ComputadorRepository{
    constructor(private readonly prisma: PrismaService){}

    async create(createComputadorDto: CreateComputadorDto) : Promise<ComputadorEntity>{
        const {usuarioEmail} = createComputadorDto

        delete createComputadorDto.usuarioEmail


        const data : Prisma.ComputadorCreateInput = {
            ...createComputadorDto,
            usuario:{
                connect: {
                    email: usuarioEmail
                }
            }
        }
        return  this.prisma.computador.create({
            data
        })
    }

    async findAll() : Promise<ComputadorEntity[]> {
        return this.prisma.computador.findMany({
            include:{
                usuario:{
                    select:{
                        name: true
                    }
                }
            }
        })
    }
    
    async findOne(id : number) : Promise<ComputadorEntity>{
        return this.prisma.computador.findUnique(
            {
                where:{
                    id
                },
                include:{
                    usuario:{
                        select:{
                            name: true
                        }
                    }
                }
            }
        )
    }

    async update(id: number, updateComputadorDto: UpdateComputadorDto){
        return this.prisma.computador.update({
            where: {id},
            data:{
                memoriaRam : updateComputadorDto.memoriaRam,
                placaDeVideo: updateComputadorDto.placaDeVideo,
                processador: updateComputadorDto.processador,
                placaMae: updateComputadorDto.placaMae
            },
            include:{
                usuario: {
                    select:{
                        name: true
                    }
                }
            }
        })
    }

    async delete(id:number){
        this.prisma.computador.delete({
            where:{
                id
            }
        })
    }

}


