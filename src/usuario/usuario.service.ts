import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsuarioComputadorDto } from 'src/usuario-computador/create-usuario-computador.dto';

@Injectable()
export class UsuarioService {
    constructor(private readonly repository: UserRepository){}

    create(usuarioComputadorDto: UsuarioComputadorDto){
        return this.repository.create(usuarioComputadorDto)
    }

    findAll(){
        return this.repository.findAll()
    }
    findOne(id: number){
        return this.repository.findOne(id);
    }

    update(id: number, updateUserDto: UpdateUserDto){
        return this.repository.update(id, updateUserDto)
    }

    delete(id: number){
        return this.repository.remove(id)
    }

}
