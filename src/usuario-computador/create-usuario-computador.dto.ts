import { CreateUserDto } from "src/usuario/dto/createUser.dto";
import { IsDto } from "src/decorator/isUserDto.decorator";
import { CreateComputadorDto } from "src/computador/dto/createComputador.dto";
import { IsOptional } from "class-validator";

export class UsuarioComputadorDto {
    @IsDto(CreateUserDto)
    usuario: CreateUserDto

    @IsDto(CreateComputadorDto)
    @IsOptional()
    computador?: CreateComputadorDto
}