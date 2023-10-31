import { pokemonActions } from "../slices/pokemonSlice";
import axios from "axios";

export const fetchAllPokemons = () => {
  return async (dispatch): Promise<void> => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=60"
      );

      const data = response.data.results;

      return data;
    };

    try {
      const pokemonData = await fetchData();
      dispatch(pokemonActions.fillAllPokemonsArray(pokemonData));
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const searchPokemon = () => {
  return async (dispatch): Promise<void> => {
    const fetchRandomPokemon = async () => {
      const randomIndex = Math.floor(Math.random() * 700);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomIndex}`
      );

      const data = response.data;
      return data;
    };
    try {
      const currentPokemonData = await fetchRandomPokemon();
      dispatch(pokemonActions.searchForPokemon(currentPokemonData));
    } catch (error) {
      console.log("Erro ao buscar pokemon", error);
    }
  };
};
