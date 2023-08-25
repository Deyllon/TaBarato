import {
  ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/createChat.dto';


@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection{
    @WebSocketServer()
    server: Server;

    constructor(private readonly chatService: ChatsService){}

    async handleConnection(socket: Socket){
      await this.chatService.getUserFromSocket(socket)
    }

    @SubscribeMessage('send_message')
    async listenForMessages(@MessageBody() message: string , @ConnectedSocket() socket: Socket ) {
      const usuario = await this.chatService.getUserFromSocket(socket)
      const mensagem = JSON.parse(message) as CreateChatDto 
      
      await this.chatService.createMessage(mensagem, usuario.id)

      this.server.sockets.emit('receive_message', {
        message:mensagem.conteudo,
        usuario: usuario.name
      }); 
    }

    @SubscribeMessage('get_all_messages')
    async getAllMessages(){
      const messages = await this.chatService.getAllMessages()
      this.server.sockets.emit('receive_all_messages', messages);
      
    }

    @SubscribeMessage('get_message_from_user')
    async getMessageForThisUser(@ConnectedSocket() socket: Socket){
      const usuario = await this.chatService.getUserFromSocket(socket)
      const messages = await this.chatService.getMessageForUser(usuario)
      this.server.sockets.emit('receive_message_usuario', messages);
      
    }

}