import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

import { UserAuthEntity } from 'src/usuario/userAuthEntity/userAuth.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({usernameField: "email", passwordField: 'senha'});
  }

   async validate(email: string, senha: string): Promise<UserAuthEntity> {
    const usuario = await this.authService.validateUser(email, senha);
    if (!usuario) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'Usuario não existe ou senha incorreta', 
      });
    }
    return usuario;
  }
}