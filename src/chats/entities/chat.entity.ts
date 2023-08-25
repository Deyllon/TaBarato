import { Mensagem} from '@prisma/client';

export class MensagemEntity implements Mensagem{
    id: number
    conteudo: string
    remetenteId: number
    destinatarioId: number
}