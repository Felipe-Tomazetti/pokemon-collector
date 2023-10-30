import { useEffect, useState } from "react";
import * as S from "./styled";
import PlayerContainer from "../../components/PlayerContainer";
import Sound from "react-sound";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPokemons } from "../../store/actions/pokemonActions";
import PokemonTheme from "../../assets/Pokemon.mp3";
import PokemonsContainer from "../../components/PokemonsContainer";
import PokemonModal from "../../components/PokemonModal";

const Map = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  //const allPokemons = useSelector((state) => state.pokemons.allPokemons);

  useEffect(() => {
    dispatch(fetchAllPokemons());
  }, [dispatch]);

  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handlePokemonSearc = () => {};

  return (
    <S.Wrapper>
      {showModal && <PokemonModal onClose={handleModalClose} />}
      {/* <Sound
        url={PokemonTheme}
        playStatus={Sound.status.PLAYING}
        playFromPosition={5000}
        volume={10}
      /> */}
      <S.PokemonContainerWrapper>
        <PokemonsContainer />
      </S.PokemonContainerWrapper>
      <S.PlayerContainerWrapper>
        <PlayerContainer onClick={handleModalOpen} />
      </S.PlayerContainerWrapper>
    </S.Wrapper>
  );
};

export default Map;
