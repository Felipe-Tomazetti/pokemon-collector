import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  fetchAllPokemons,
  searchPokemon,
} from "../../store/actions/pokemonActions";
import { walkingActions } from "../../store/slices/walkingSlice";
import { pokemonActions } from "../../store/slices/pokemonSlice";
import PlayerContainer from "../../components/PlayerContainer";
import PokemonsContainer from "../../components/PokemonsContainer";
import PokemonModal from "../../components/PokemonModal";
import * as S from "./styled";

const Map = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const allPokemons = useSelector(
    (state: RootState) => state.pokemons.allPokemons
  );
  const currentPokemonFound = useSelector(
    (state: RootState) => state.pokemons.currentPokemonFound
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

  const handlePokemonSearch = () => {
    dispatch(walkingActions.startWalking());
    dispatch(searchPokemon());

    setTimeout(() => {
      dispatch(walkingActions.stopWalking());
      handleModalOpen();
    }, 2000);
  };

  return (
    <S.Wrapper>
      {showModal && (
        <PokemonModal
          pokemonData={currentPokemonFound}
          onClose={handleModalClose}
        />
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
