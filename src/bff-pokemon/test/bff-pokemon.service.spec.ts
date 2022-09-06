import { Test, TestingModule } from '@nestjs/testing';
import { BffPokemonService } from '../bff-pokemon.service';

describe('BffPokemonService', () => {
  let service: BffPokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BffPokemonService],
    }).compile();

    service = module.get<BffPokemonService>(BffPokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
