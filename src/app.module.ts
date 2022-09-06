import { Module } from '@nestjs/common';
import { BffPokemonModule } from './bff-pokemon/bff-pokemon.module';

@Module({
  imports: [BffPokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
