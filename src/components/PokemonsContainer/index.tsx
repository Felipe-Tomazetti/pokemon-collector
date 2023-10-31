import { useSelector } from "react-redux";
import Button from "../Button";
import plusIcon from "../../assets/icons/plusIcon.png";
import questionMark from "../../assets/icons/questionMarkIcon.png";
import PokemonButton from "../PokemonButton";
import CapturedPokemonModal from "../CapturedPokemonModal";
import * as S from "./styled";

const PokemonsContainer = () => {
  const pokemonClickHandler = () => {
    console.log("Olha esse pokemon!");
  };

  const capturedPokemons = useSelector(
    (state) => state.pokemons.capturedPokemons
  );

  console.log("captured pokemons", capturedPokemons);

  const newPokemonClickHandler = () => {};
  return (
    <S.Wrapper>
      {/* {showModal && (
        <CapturedPokemonModal
          pokemonData={currentPokemon}
          onClose={handleModalClose}
        />
      )} */}
      {capturedPokemons.map((pokemon) => (
        <PokemonButton
          icon={pokemon[0].imageURL ? pokemon[0].imageURL : questionMark}
          onClick={newPokemonClickHandler}
        />
      ))}
      <Button icon={plusIcon} onClick={pokemonClickHandler} />
    </S.Wrapper>
  );
};

export default PokemonsContainer;
