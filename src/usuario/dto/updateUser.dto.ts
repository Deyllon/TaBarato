import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './createUser.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional() 
    @ApiProperty({ example: 'senha123', required: false, description: 'Senha do usuario' })
    password?: string;
  
    @IsOptional() 
    @ApiProperty({ example: 'usuarioemail@gmail.com', required: false, description: 'Email do usuario' })
    email?: string;

    @IsOptional()
    @ApiProperty({ example: 'usuarionome', required: false, description: 'Nome do usuario' })
    name?: string;
}