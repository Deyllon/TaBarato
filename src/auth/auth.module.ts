import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LocalStrategy } from './local.strategy';
import {PassportModule} from "@nestjs/passport"
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, PrismaService, LocalStrategy, JwtStrategy],
  imports:
  [ PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers:[AuthController]
})
export class AuthModule {}
