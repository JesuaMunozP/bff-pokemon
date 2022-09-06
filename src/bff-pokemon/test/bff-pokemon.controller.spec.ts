import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { BffPokemonController } from '../bff-pokemon.controller';
import { BffPokemonService } from '../bff-pokemon.service';

describe('BffPokemonController', () => {
  let controller: BffPokemonController;
  const mockService = {
    findByGet: jest.fn((id) => {
      return {
        id: '1',
        name: 'pokemon',
      };
    }),
    findByPost: jest.fn((id) => ({
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

  describe('Should return a pokemon by get or post', () => {
    it('byGet(), should return a pokemon by id', () => {
        expect(controller.findByGet('1')).toEqual({
            id: '1',
            name: 'pokemon',
        });
    });
    it('byPost(), should return a pokemon by id', () => {
      expect(controller.findByPost('1')).toEqual({
          id: '1',
          name: 'pokemon',
      });
  });
  });
});
