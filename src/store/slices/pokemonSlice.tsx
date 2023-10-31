import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  id: number;
  imageURL: string;
  name: string;
  hp: number;
  height: number;
  weight: number;
  types: [];
  abilities: [];
  stats: {
    defense: number;
    attack: number;
    specialDefense: number;
    specialAttack: number;
    moveSpeed: number;
  };
}

interface PokemonState {
  allPokemons: any[];
  capturedPokemons: Pokemon[];
  currentPokemonFound: Pokemon[];
}

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    allPokemons: [],
    capturedPokemons: [],
    currentPokemonFound: [],
  } as PokemonState,
  reducers: {
    fillAllPokemonsArray(state, action: PayloadAction<[]>) {
      state.allPokemons = action.payload;
    },
    capturePokemon(state, action: PayloadAction<Pokemon>) {
      const capturedPokemon = action.payload;
      state.capturedPokemons.push(capturedPokemon);
    },
    searchForPokemon(state, action: PayloadAction<[]>) {
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
    releasePokemon(state, action: PayloadAction) {
      const pokemonId = action.payload;
      state.capturedPokemons = state.capturedPokemons.filter(
        (pokemon) => pokemon[0].id !== pokemonId
      );
    },
  },
});

export const pokemonActions = pokemonSlice.actions;

export default pokemonSlice;
