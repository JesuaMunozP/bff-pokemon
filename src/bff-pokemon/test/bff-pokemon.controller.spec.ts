import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { BffPokemonController } from '../bff-pokemon.controller';
import { BffPokemonService } from '../bff-pokemon.service';

describe('BffPokemonController', () => {
  let controller: BffPokemonController;
  const mockService = {
    byGet: jest.fn((id) => {
      return {
        id: '1',
        name: 'pokemon',
      };
    }),
    byPost: jest.fn((id) => ({
      id,
      name: 'pokemon',
    })),
    get: jest.fn(),
    findOne: jest.fn((id) => ({
      id,
      name: 'pokemon',
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BffPokemonController],
      providers: [BffPokemonService,
        {
          provide: HttpService,
          useValue: mockService,
        },
        {
          provide: BffPokemonService,
          useValue: mockService,
        },],
    }).compile();

    controller = module.get<BffPokemonController>(BffPokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
