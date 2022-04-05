import type { PokeAPI } from "pokeapi-types"
import type { IPokemon } from "../types/IPokemon"

export const buildPokemon = (fullPokemon: PokeAPI.Pokemon): IPokemon => {
  const { name, sprites, abilities, base_experience: experience, weight } = fullPokemon

  const refactorAbilities = abilities.map(ability => ability.ability.name)

  return {
    name,
    image: sprites.other['official-artwork']['front_default'] as any,
    abilities: refactorAbilities,
    experience,
    weight
  }
}