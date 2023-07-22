import { Injectable } from '@nestjs/common';
import { ComputadorRepository } from './repositories/computador.repository';
import { CreateComputadorDto } from './dto/createComputador.dto';
import { UpdateComputadorDto } from './dto/updateComputador.dto';

@Injectable()
export class ComputadorService {
    constructor(private readonly computadorRepository: ComputadorRepository){}

    create(createComputadorDto: CreateComputadorDto){
        return this.computadorRepository.create(createComputadorDto)
    }

    findAll(){
        return this.computadorRepository.findAll()
    }

    findOne(id: number){
        return this.computadorRepository.findOne(id)
    }

    update(id: number, updateComputadorDto: UpdateComputadorDto){
        return this.computadorRepository.update(id, updateComputadorDto)   
    }

    delete(id: number){
        return this.computadorRepository.delete(id)
    }

}
