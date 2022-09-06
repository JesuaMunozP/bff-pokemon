import { Test, TestingModule } from '@nestjs/testing';
import { BffPokemonController } from '../bff-pokemon.controller';
import { BffPokemonService } from '../bff-pokemon.service';

describe('BffPokemonController', () => {
  let controller: BffPokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BffPokemonController],
      providers: [BffPokemonService],
    }).compile();

    controller = module.get<BffPokemonController>(BffPokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
