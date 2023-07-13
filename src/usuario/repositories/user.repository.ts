import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { UserEntity } from '../entities/user.entity';
import { CreateComputadorDto } from 'src/computador/dto/createComputador.dto';

@Injectable()
export class UserRepository{
    constructor(private readonly prisma: PrismaService){}

    async create(createUserDto: CreateUserDto, createComputadorDto? : CreateComputadorDto): Promise<UserEntity>{

        if (createComputadorDto){
            return this.prisma.usuario.create({
                data:{
                    email : createUserDto.email,
                    name : createUserDto.name,
                    password: createUserDto.password,
                    computador:{
                        create:[{
                            placaMae: createComputadorDto.placaMae,
                            processador: createComputadorDto.processador,
                            placaDeVideo: createComputadorDto.placaDeVideo,
                            memoriaRam: createComputadorDto.memoriaRam
                            }
                        ]
                    }
                }
            })
        }   

        return this.prisma.usuario.create({
            data:{
                email : createUserDto.email,
                name : createUserDto.name,
                password: createUserDto.password
            }
        })
        
    }

    async findAll(): Promise<UserEntity[]>{
        //@ts-ignore
        return  this.prisma.usuario.findMany({
            include: {
                computador : true
            }
        })
    }

    async findOne(id: number) : Promise<UserEntity>{
        //@ts-ignore

        return this.prisma.usuario.findUnique(
            {
                where: {
                    id
                },
                include:{
                    computador: true
                }
            }
        )
        
    }
}