import { IsEmail, IsNotEmpty, IsNumber, IsString,  } from "class-validator";


export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name : string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsEmail()
    email : string

    @IsNumber()
    computador ?: number
}