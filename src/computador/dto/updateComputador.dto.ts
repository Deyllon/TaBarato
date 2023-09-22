import { PartialType } from '@nestjs/swagger';
import { CreateComputadorDto} from './createComputador.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateComputadorDto extends PartialType(CreateComputadorDto) {
   
    @IsOptional()
    @ApiProperty({ example: 'B450 m', required: false, description: 'Placa mãe do computador' })
    placaMae : string

    @IsOptional()
    @ApiProperty({ example: 'Intel core i7', required: false, description: 'Processador do computador' })
    processador: string

  
    @IsOptional()
    @ApiProperty({ example: ['8 gb', '8 gb'], isArray: true, required: false, description: 'MemoriaRam do computador' })
    memoriaRam: string[]

    @IsOptional()
    @ApiProperty({ example: 'RTX 3090', required: false, description: 'Placa de video  do computador' })
    placaDeVideo: string

   
    @IsOptional()
    @ApiProperty({ example: 'usuario@gmail.com', required: false, description: 'email do usuario que esse computador pertence' })
    usuarioEmail : string
}