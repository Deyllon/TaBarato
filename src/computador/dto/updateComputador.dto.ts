import { PartialType } from '@nestjs/swagger';
import { CreateComputadorDto} from './createComputador.dto';

export class UpdateUserDto extends PartialType(CreateComputadorDto) {}