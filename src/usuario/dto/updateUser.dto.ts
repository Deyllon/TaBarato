import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './createUser.dto';
import { IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional() 
    password?: string;
  
    @IsOptional() 
    email?: string;

    @IsOptional()
    name?: string;
}