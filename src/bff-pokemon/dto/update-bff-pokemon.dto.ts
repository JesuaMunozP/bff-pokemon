import { PartialType } from '@nestjs/mapped-types';
import { CreateBffPokemonDto } from './create-bff-pokemon.dto';

export class UpdateBffPokemonDto extends PartialType(CreateBffPokemonDto) {}
