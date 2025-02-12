import { Test, TestingModule } from '@nestjs/testing';
import { SapResolver } from './sap.resolver';

describe('SapResolver', () => {
  let resolver: SapResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SapResolver],
    }).compile();

    resolver = module.get<SapResolver>(SapResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
