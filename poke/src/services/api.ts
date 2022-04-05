import { buildPokemon } from '../utils/buildPokemon';
import type { PokeAPI } from 'pokeapi-types';
import type { IPokemon } from 'src/types/IPokemon';

export const getPokemons = async (
  fetch = window.fetch,
  offset: number,
  limit: number
): Promise<IPokemon[]> => {
  const pokemonsNamed = await getPokemonList(offset, limit);
  const calls = [];
  const pokemons: IPokemon[] = [];

  pokemonsNamed.forEach((pokemon) => {
    calls.push(fetch(pokemon.url));
  });

  await Promise.all(calls)
    .then((responses) => {
      return Promise.all(
        responses.map((resp) => {
          return resp.json();
        })
      );
    })
    .then((pokemonList) => {
      pokemonList.map((pk) => {
        const tmpPk = buildPokemon(pk);
        pokemons.push(tmpPk);
      });
    });

  return pokemons;
};

const getPokemonList = async (
  offset: number,
  limit: number
): Promise<PokeAPI.NamedAPIResource[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const pokemons = await response.json();
  return pokemons.results;
};