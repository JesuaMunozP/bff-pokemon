import { Module } from '@nestjs/common';
import { BffPokemonService } from './bff-pokemon.service';
import { BffPokemonController } from './bff-pokemon.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [BffPokemonController],
  providers: [BffPokemonService],
  imports: [HttpModule]
})
export class BffPokemonModule {}
