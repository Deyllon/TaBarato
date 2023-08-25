import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatGateway } from './chat.gateway';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [],
  providers: [ChatsService, ChatGateway, AuthService, PrismaService, JwtService]
})
export class ChatsModule {}
