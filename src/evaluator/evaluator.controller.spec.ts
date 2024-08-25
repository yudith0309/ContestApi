import { Test, TestingModule } from '@nestjs/testing';
import { EvaluatorController } from './evaluator.controller';

describe('EvaluatorController', () => {
  let controller: EvaluatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluatorController],
    }).compile();

    controller = module.get<EvaluatorController>(EvaluatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
