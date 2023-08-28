import * as bcrypt from 'bcrypt'

export async function encryption (senha){
    const saltOrRounds = 10;
    
    return  bcrypt.hash(senha, saltOrRounds);
}