import {  Controller, Post,  Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';

import { Public } from 'src/decorator/public.decorator';
import { LocalAuthGuard } from './localAuthGuard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService ){}
    
    
    @Public()
    @UseGuards(LocalAuthGuard)
    @Post("/login")
    async login(@Request() req: any){ 
        return this.authService.login(req.user);
    }

}
