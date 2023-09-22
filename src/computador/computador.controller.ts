import { Controller, Post, Body, Get, Patch , Param, Delete} from '@nestjs/common';
import { ComputadorService } from './computador.service';
import { CreateComputadorDto } from './dto/createComputador.dto';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { UpdateComputadorDto } from './dto/updateComputador.dto';

@Controller('computador')
@ApiBearerAuth()
@ApiTags('computador')
export class ComputadorController {
    constructor(private readonly computadorService: ComputadorService){}

    @Post("/create")
    @ApiOperation({ summary: 'Criar um computador' })
    @ApiResponse({ status: 201, description: 'Criado' })
    
    create(@Body() createComputadorDto : CreateComputadorDto){
        return this.computadorService.create(createComputadorDto)
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os computadores' })
    @ApiResponse({ status: 200, description: 'Ok' })
    findAll(){
        return this.computadorService.findAll()
    } 

    @Get(':id')
    @ApiOperation({ summary: 'Listar um computador' })
    @ApiResponse({ status: 200, description: 'Ok' })
    findOne(@Param('id') id: string){
        return this.computadorService.findOne(+id)
    }

   
    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um computador' })
    @ApiResponse({ status: 200, description: 'Ok' })
    update(@Param('id') id: string, @Body() updateComputadorDto: UpdateComputadorDto){
        return this.computadorService.update(+id, updateComputadorDto)
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um computador' })
    @ApiResponse({ status: 200, description: 'Ok' })
    remove(@Param('id') id: string){
        return this.computadorService.delete(+id)
    }

}
