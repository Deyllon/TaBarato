import { CreateUserDto } from "src/usuario/dto/createUser.dto";
import { IsDto } from "src/decorator/isUserDto.decorator";
import { CreateComputadorDto } from "src/computador/dto/createComputador.dto";
import { IsOptional } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UsuarioComputadorDto {
    @IsDto(CreateUserDto)
    @ApiProperty({ type: CreateUserDto })
    usuario: CreateUserDto

    @IsDto(CreateComputadorDto)
    @IsOptional()
    @ApiProperty({ type: CreateComputadorDto, required: false, description: 'Ignorar a propriedade usuarioEmail' })
    computador?: CreateComputadorDto
}