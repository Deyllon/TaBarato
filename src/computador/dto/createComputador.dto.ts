import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEmail, IsNotEmpty,  IsOptional,  IsString  } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateComputadorDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'B450 m', description: 'Placa mãe do computador' })
    placaMae : string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Intel core i7', description: 'Processador do computador' })
    processador: string

    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @IsString({each:true})
    @ApiProperty({ example: ['8 gb', '8 gb'], isArray: true, description: 'MemoriaRam do computador' })
    memoriaRam: string[]

    @IsString()
    @ApiProperty({ example: 'RTX 3090', description: 'Placa de video  do computador' })
    placaDeVideo: string

    @IsEmail()
    @ApiProperty({ example: 'usuario@gmail.com', description: 'email do usuario que esse computador pertence' })
    usuarioEmail : string
}