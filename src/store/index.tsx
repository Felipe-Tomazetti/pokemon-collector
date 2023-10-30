import { configureStore } from "@reduxjs/toolkit";
import walkingSlice from "./slices/walkingSlice";
import pokemonSlice from "./slices/pokemonSlice";

const store = configureStore({
  reducer: {
    walking: walkingSlice.reducer,
    pokemons: pokemonSlice.reducer},
});

export default store;
