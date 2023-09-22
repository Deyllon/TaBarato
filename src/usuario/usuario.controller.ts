import { Body, Controller, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { UsuarioComputadorDto } from 'src/usuario-computador/create-usuario-computador.dto';
import { UsuarioService } from './usuario.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { Public } from 'src/decorator/public.decorator';

@ApiBearerAuth()
@ApiTags('usuarios')
@Controller('usuario')
export class UsuarioController {
    constructor( private readonly usuarioService: UsuarioService){}

    @Public()
    @Post("/create")
    @ApiOperation({ summary: 'Criar usuario' , security:[]})
    @ApiResponse({ status: 201, description: 'Criado' })
    create(@Body() usuarioComputadorDto: UsuarioComputadorDto){
        return this.usuarioService.create(usuarioComputadorDto)
    }
    @Get()
    @ApiOperation({ summary: 'Listar todos usuarios' })
    @ApiResponse({ status: 200, description: 'Ok' })
    findAll(){
        return this.usuarioService.findAll()
    }
    @Get(':id')
    @ApiOperation({ summary: 'Listar um usuario' })
    @ApiResponse({ status: 200, description: 'Ok' })
    findOne(@Param('id') id: string){
        return this.usuarioService.findOne(+id)
    }
    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um usuario' })
    @ApiResponse({ status: 200, description: 'Ok' })
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.usuarioService.update(+id, updateUserDto)
    }
    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um usuario' })
    @ApiResponse({ status: 200, description: 'Ok' })
    remove(@Param('id') id: string){ 
        return this.usuarioService.delete(+id)
    }
}
