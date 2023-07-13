import { Computador} from '@prisma/client';

export class ComputadorEntity implements Computador {
  id: number;
  usuarioId : number
  placaMae: string
  processador: string
  memoriaRam: string[]
  placaDeVideo: string
}
