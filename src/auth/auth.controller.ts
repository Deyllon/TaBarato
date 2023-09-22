import {  Controller, Post,  Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';

import { Public } from 'src/decorator/public.decorator';
import { LocalAuthGuard } from './localAuthGuard';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@Controller('auth')

@ApiTags('Login')
export class AuthController {
    constructor(private readonly authService: AuthService ){}
    
    
    @Public()
    @UseGuards(LocalAuthGuard)
    @Post("/login")
    @ApiOperation({ summary: 'Login do usuario',
    description: 'Este endpoint autentica o usuário, mas os detalhes de autenticação não estão documentados aqui' })
    @ApiResponse({ status: 201, description: 'Criado' })
    async login(@Request() req: any){ 
        
        return this.authService.login(req.user);
    }

}
