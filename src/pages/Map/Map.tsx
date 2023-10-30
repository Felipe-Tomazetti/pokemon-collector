import { useEffect } from "react";
import * as S from "./styled";
import PlayerContainer from "../../components/PlayerContainer";
import Sound from "react-sound";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPokemons } from "../../store/actions/pokemonActions";
import PokemonTheme from "../../assets/Pokemon.mp3";

const Map = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons.allPokemons);

  useEffect(() => {
    dispatch(fetchAllPokemons());
  }, [dispatch]);

  return (
    <S.Wrapper>
      {/* <Sound
        url={PokemonTheme}
        playStatus={Sound.status.PLAYING}
        playFromPosition={5000}
        volume={10}
      /> */}
      <PlayerContainer />
    </S.Wrapper>
  );
};

export default Map;
