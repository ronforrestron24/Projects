import { Test, TestingModule } from '@nestjs/testing';
import { PosResolver } from './pos.resolver';

describe('PosResolver', () => {
  let resolver: PosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosResolver],
    }).compile();

    resolver = module.get<PosResolver>(PosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
