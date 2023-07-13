import { Test, TestingModule } from '@nestjs/testing';
import { ComputadorController } from './computador.controller';

describe('ComputadorController', () => {
  let controller: ComputadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputadorController],
    }).compile();

    controller = module.get<ComputadorController>(ComputadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
