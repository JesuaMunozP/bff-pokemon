import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BffPokemonService } from './bff-pokemon.service';
import { CreateBffPokemonDto } from './dto/create-bff-pokemon.dto';
import { UpdateBffPokemonDto } from './dto/update-bff-pokemon.dto';

@Controller('bff-pokemon')
export class BffPokemonController {
  constructor(private readonly bffPokemonService: BffPokemonService) {}

  @Post(':id')
  findByPost(@Param('id') id: string) {
    return this.bffPokemonService.findOne(id);
  }

  @Get(':id')
  findByGet(@Param('id') id: string) {
    return this.bffPokemonService.findOne(id);
  }
}
