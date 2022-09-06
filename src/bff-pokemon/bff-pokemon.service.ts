import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateBffPokemonDto } from './dto/create-bff-pokemon.dto';
import { UpdateBffPokemonDto } from './dto/update-bff-pokemon.dto';

@Injectable()
export class BffPokemonService {
  constructor(private readonly httpService: HttpService) {}
  private readonly url = 'http://localhost:3001/api/ms-pokemon/';
  
  async findOne(id: string) {
    return await this.serviceCallPokemon(this.url, id); 
  }

  async serviceCallPokemon(url, id) {
    const response =  await lastValueFrom(this.httpService.get(url + id));
    const pokemon = {
      id : response.data.id,
      name: response.data.name,
      type: response.data.type,
    }
    return pokemon;
  }
}
