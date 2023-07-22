import { Usuario} from '@prisma/client';

export class UserEntity implements Usuario {
  id: number;
  email: string;
  name: string;
  password: string;
}
