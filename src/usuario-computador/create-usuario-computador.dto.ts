import { CreateUserDto } from "src/usuario/dto/createUser.dto";

import { CreateComputadorDto } from "src/computador/dto/createComputador.dto";

export class UsuarioComputadorDto {
    usuario: CreateUserDto
    computador: CreateComputadorDto
}