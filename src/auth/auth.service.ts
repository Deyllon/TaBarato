import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserAuthEntity } from 'src/usuario/userAuthEntity/userAuth.entity';
import { jwtConstants } from './constant';
import { error } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService
  ) {}



  async validateUser(email: string, senha: string): Promise<UserAuthEntity> {
    const user = await this.prisma.usuario.findUnique({
      where:{
          email: email
      }
  })
    if (user && user.password === senha) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(usuario: UserAuthEntity){
    const user = await this.prisma.usuario.findUnique({
      where:{
        email: usuario.email
      }
    })
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async extrairUsuario(token: string){
    const payload  = this.jwtService.verify(token,{
      secret: jwtConstants.secret
    })

    const usuario = await this.prisma.usuario.findUnique({
      where:{
        id: payload.sub
      }
    })

    
    return usuario
    
    
  }
  
}