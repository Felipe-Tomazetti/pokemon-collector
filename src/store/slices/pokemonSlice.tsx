import { createSlice } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  url: string;
}

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: { allPokemons: [], capturedPokemons: [] },
  reducers: {
    fillAllPokemonsArray(state, action) {
      state.allPokemons = action.payload;
    },
    capturePokemon(state, action) {},
  },
});

export const pokemonActions = pokemonSlice.actions;

export default pokemonSlice;
