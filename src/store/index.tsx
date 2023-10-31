import { configureStore } from "@reduxjs/toolkit";
import walkingSlice from "./slices/walkingSlice";
import pokemonSlice from "./slices/pokemonSlice";

const store = configureStore({
  reducer: {
    walking: walkingSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
