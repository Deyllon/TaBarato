import { IsEmail, IsNotEmpty,  IsOptional,  IsString  } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'senha123', description: 'Senha do usuario' })
    name : string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'usuarioemail@gmail.com', description: 'Email do usuario' })
    password: string

    @IsEmail()
    @ApiProperty({ example: 'usuarionome', description: 'Nome do usuario' })
    email : string

    @IsString()
    @IsOptional()
    computador?: string 

}