import { IsEmail, IsNotEmpty,  IsOptional,  IsString  } from "class-validator";


export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name : string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsEmail()
    email : string

    @IsString()
    @IsOptional()
    computador?: string 

}