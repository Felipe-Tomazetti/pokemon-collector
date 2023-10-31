import { createSlice } from "@reduxjs/toolkit";

type Pokemon = {
  id: number;
  imageURL: string;
  name: string;
  hp: number;
  height: number;
  weight: number;
  types: Array<string>;
  abilities: Array<string>;
  stats: {
    defense: number;
    attack: number;
    specialDefense: number;
    specialAttack: number;
    moveSpeed: number;
  };
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    allPokemons: [],
    capturedPokemons: [],
    currentPokemonFound: [],
  },
  reducers: {
    fillAllPokemonsArray(state, action) {
      state.allPokemons = action.payload;
    },
    capturePokemon(state, action) {
      const capturedPokemon = action.payload;
      state.capturedPokemons.push(capturedPokemon);
    },
    searchForPokemon(state, action) {
      const currentPokemon = action.payload;
      state.currentPokemonFound.push({
        id: currentPokemon.id,
        imageURL: currentPokemon.sprites.front_default,
        name: currentPokemon.forms[0].name,
        hp: currentPokemon.stats[0].base_stat,
        height: currentPokemon.height,
        weight: currentPokemon.weight,
        types: currentPokemon.types,
        abilities: currentPokemon.abilities,
        stats: {
          defense: currentPokemon.stats[2].base_stat,
          attack: currentPokemon.stats[1].base_stat,
          specialDefense: currentPokemon.stats[4].base_stat,
          specialAttack: currentPokemon.stats[3].base_stat,
          moveSpeed: currentPokemon.stats[5].base_stat,
        },
      });
    },
    cleanCurrentPokemon(state) {
      state.currentPokemonFound = [];
    },
    releasePokemon(state) {},
  },
});

export const pokemonActions = pokemonSlice.actions;

export default pokemonSlice;
