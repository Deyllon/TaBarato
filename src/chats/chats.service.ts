import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';
import { CreateChatDto } from './dto/createChat.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Usuario } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class ChatsService {
    constructor(
        private readonly authService: AuthService,
        private readonly prisma: PrismaService){}
    async getUserFromSocket(socket: Socket) {
        let auth_token = socket.handshake.headers.authorization;
        if(auth_token){
            auth_token = auth_token.split(' ')[1];

            const usuario = await this.authService.extrairUsuario(auth_token)

            

            return usuario
        }
        throw error
        
        
       
    }

    async createMessage(message: CreateChatDto, usuarioId: number){
        const {destinatarioEmail} = message


        delete message.destinatarioEmail

        if(destinatarioEmail){
            const data : Prisma.MensagemCreateInput = {
                ...message,
                remetente: {
                    connect:{
                        id: usuarioId
                    }
                },
                destinatario :{
                    connect:{
                        email: destinatarioEmail
                    }
                }
            }
            return this.prisma.mensagem.create({
                data
            })
        }
        const data : Prisma.MensagemCreateInput = {
            ...message,
            remetente: {
                connect:{
                    id: usuarioId
                }
            }
        }
        return this.prisma.mensagem.create({
            data
        })
       

    }

    async getAllMessages(){
        return this.prisma.mensagem.findMany(
            {
                select:{
                    conteudo: true,
                    remetente:{
                        select:{
                            name: true
                        }
                    }
                },
            where:{
                destinatarioId: null
            }
            }
        )
    }

    async getMessageForUser(user: Usuario){
        return this.prisma.mensagem.findMany(
            {
                select:{
                    conteudo: true,
                    remetente:{
                        select:{
                            name: true
                        }
                    },
                    destinatario:{
                        select:{
                            name:true
                        }
                    }
                },
                where:{
                    OR:[
                        {destinatarioId: user.id},
                        {remetenteId: user.id} 
                    ]
                }
            }
        )
    }

}
