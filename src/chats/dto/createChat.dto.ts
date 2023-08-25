import {  IsEmail, IsNotEmpty,  IsNumber,  IsString  } from "class-validator";


export class CreateChatDto{
    @IsString()
    @IsNotEmpty()
    conteudo: string

    
    @IsEmail()
    @IsNotEmpty()
    destinatarioEmail: string


}