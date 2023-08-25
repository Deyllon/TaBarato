import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioComputadorDto } from 'src/usuario-computador/create-usuario-computador.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { UserEntity } from '../entities/user.entity';


@Injectable()
export class UserRepository{
    constructor(private readonly prisma: PrismaService){}

    async create(usuarioComputadorDto: UsuarioComputadorDto): Promise<UserEntity>{

        if (usuarioComputadorDto.computador){
            return this.prisma.usuario.create({
                data:{
                    email : usuarioComputadorDto.usuario.email,
                    name : usuarioComputadorDto.usuario.name,
                    password: usuarioComputadorDto.usuario.password,
                    computador:{
                        create:[{
                            placaMae: usuarioComputadorDto.computador.placaMae,
                            processador: usuarioComputadorDto.computador.processador,
                            placaDeVideo: usuarioComputadorDto.computador.placaDeVideo,
                            memoriaRam: usuarioComputadorDto.computador.memoriaRam
                            }
                        ]
                    }
                }
            })
        }   

        return this.prisma.usuario.create({
            data:{
                email : usuarioComputadorDto.usuario.email,
                name : usuarioComputadorDto.usuario.name,
                password: usuarioComputadorDto.usuario.password
            }
        })
        
    }

    async findAll(): Promise<UserEntity[]>{
    
        return  this.prisma.usuario.findMany({
            include: {
                computador : true
            }
        })
    }

    async findOne(id: number) : Promise<UserEntity>{
        const usuario = await this.prisma.usuario.findUnique(
            {
                where: {
                    id
                },
                include:{
                    computador: true
                }
            }
        )
        if(usuario){
            return usuario
        }
        throw new NotFoundException(`usuario com o id: ${id} não foi encontrado`);
        
    }

    async update(id: number, updateUserDto : UpdateUserDto) : Promise<UserEntity>{
       
        return this.prisma.usuario.update({
            where: {
                id
            },
            data: {
                email: updateUserDto.email,
                name: updateUserDto.name,
                password: updateUserDto.password
            },
            include:{
                computador: true
            }
        })
    }

    async remove(id: number): Promise<UserEntity>{
        return this.prisma.usuario.delete({
            where: {
                id
            }
        })
    }
}