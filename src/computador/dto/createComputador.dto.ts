import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEmail, IsNotEmpty,  IsOptional,  IsString  } from "class-validator";


export class CreateComputadorDto{
    @IsString()
    @IsNotEmpty()
    placaMae : string

    @IsString()
    @IsNotEmpty()
    processador: string

    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @IsString({each:true})
    memoriaRam: string[]

    @IsString()
    placaDeVideo: string

    @IsEmail()
   
    usuarioEmail : string
}