import { pokemonActions } from "../slices/pokemonSlice";
import axios from "axios";

export const fetchAllPokemons = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=60"
      );

      const data = response.data.results;

      console.log("response", response);
      return data;
    };

    try {
      const pokemonData = await fetchData();
      console.log("pokemonData", pokemonData);
      dispatch(pokemonActions.fillAllPokemonsArray(pokemonData));
    } catch (error) {
      console.log("Error", error);
    }
  };
};
