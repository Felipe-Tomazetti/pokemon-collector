import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllPokemons,
  searchPokemon,
} from "../../store/actions/pokemonActions";
import { pokemonActions } from "../../store/slices/pokemonSlice";
import * as S from "./styled";
import PlayerContainer from "../../components/PlayerContainer";
import PokemonsContainer from "../../components/PokemonsContainer";
import PokemonModal from "../../components/PokemonModal";
import CapturedPokemonModal from "../../components/CapturedPokemonModal";

const Map = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const allPokemons = useSelector((state) => state.pokemons.allPokemons);
  const currentPokemon = useSelector(
    (state) => state.pokemons.currentPokemonFound
  );

  useEffect(() => {
    dispatch(fetchAllPokemons());

    if (allPokemons === undefined) {
      dispatch(fetchAllPokemons());
    }
  }, [dispatch]);

  const handleModalClose = () => {
    dispatch(pokemonActions.cleanCurrentPokemon());
    setShowModal(false);
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handlePokemonSearch = async () => {
    await dispatch(searchPokemon());
    handleModalOpen();
  };

  return (
    <S.Wrapper>
      {showModal && (
        <PokemonModal pokemonData={currentPokemon} onClose={handleModalClose} />
      )}
      <S.PokemonContainerWrapper>
        <PokemonsContainer />
      </S.PokemonContainerWrapper>
      <S.PlayerContainerWrapper>
        <PlayerContainer onClick={handlePokemonSearch} />
      </S.PlayerContainerWrapper>
    </S.Wrapper>
  );
};

export default Map;
