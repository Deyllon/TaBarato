import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './localAuthGuard';
import { Public } from 'src/decorator/public.decorator';

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
