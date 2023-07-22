import { PartialType } from '@nestjs/swagger';
import { CreateComputadorDto} from './createComputador.dto';

export class UpdateComputadorDto extends PartialType(CreateComputadorDto) {}