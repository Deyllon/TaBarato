import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';



export async function hasValidProperties(dtoClass: any, jsonObject: any): Promise<boolean> {
  try {
    
    const dtoInstance = plainToInstance(dtoClass, jsonObject);
    const errors = await validate(dtoInstance);
    
    return errors.length === 0;
  } catch (error) {
    return false; 
  }
}