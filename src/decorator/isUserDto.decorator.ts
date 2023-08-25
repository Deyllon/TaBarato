import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { ClassType } from 'class-transformer-validator';
import { hasValidProperties } from 'src/validate/validate-dto';

export  function IsDto(dtoClass: ClassType<any>, validationOptions?: ValidationOptions) {
  return  function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isDto',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          if (!value) {
            return false;
          } 

          return  hasValidProperties(dtoClass, value);
        },
        defaultMessage(args: ValidationArguments) {
          return "Parametros do corpo da requisição invalidos";
        },
      },
    });
  };
}