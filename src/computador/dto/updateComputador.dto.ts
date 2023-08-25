import { PartialType } from '@nestjs/swagger';
import { CreateComputadorDto} from './createComputador.dto';
import { IsOptional } from 'class-validator';

export class UpdateComputadorDto extends PartialType(CreateComputadorDto) {
   
    @IsOptional()
    placaMae : string

    @IsOptional()
    processador: string

  
    @IsOptional()
    memoriaRam: string[]

    @IsOptional()
    placaDeVideo: string

   
    @IsOptional()
    usuarioEmail : string
}