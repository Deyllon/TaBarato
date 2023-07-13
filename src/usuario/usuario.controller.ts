import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('usuario')
export class UsuarioController {
    @Post()
    create(@Body() createUserDto: CreateUserDto){
        
    }
}
