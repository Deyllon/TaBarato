import { Body, Controller, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { UsuarioComputadorDto } from 'src/usuario-computador/create-usuario-computador.dto';
import { UsuarioService } from './usuario.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Public } from 'src/decorator/public.decorator';

@Controller('usuario')
export class UsuarioController {
    constructor( private readonly usuarioService: UsuarioService){}

    @Public()
    @Post("/create")
    create(@Body() usuarioComputadorDto: UsuarioComputadorDto){
        return this.usuarioService.create(usuarioComputadorDto)
    }
    @Get()
    findAll(){
        return this.usuarioService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.usuarioService.findOne(+id)
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.usuarioService.update(+id, updateUserDto)
    }
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.usuarioService.delete(+id)
    }
}
