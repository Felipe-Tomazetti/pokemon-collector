import * as S from "./styled";
import Button from "../Button";
import plusIcon from "../../assets/icons/plusIcon.png";
import questionMark from "../../assets/icons/questionMarkIcon.png";
import PokemonButton from "../PokemonButton";

const PokemonsContainer = () => {
  const pokemonClickHandler = () => {
    console.log("Olha esse pokemon!");
  };

  const newPokemonClickHandler = () => {};
  return (
    <S.Wrapper>
      <PokemonButton icon={questionMark} onClick={newPokemonClickHandler} />
      <PokemonButton icon={questionMark} onClick={newPokemonClickHandler} />
      <PokemonButton icon={questionMark} onClick={newPokemonClickHandler} />
      <PokemonButton icon={questionMark} onClick={newPokemonClickHandler} />
      <PokemonButton icon={questionMark} onClick={newPokemonClickHandler} />
      <PokemonButton icon={questionMark} onClick={newPokemonClickHandler} />
      <Button icon={plusIcon} onClick={pokemonClickHandler} />
    </S.Wrapper>
  );
};

export default PokemonsContainer;
