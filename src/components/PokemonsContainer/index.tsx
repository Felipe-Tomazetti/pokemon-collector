import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Button from "../Button";
import PokemonButton from "../PokemonButton";
import CapturedPokemonModal from "../CapturedPokemonModal";
import * as S from "./styled";
import plusIcon from "../../assets/icons/plusIcon.png";
import questionMark from "../../assets/icons/questionMarkIcon.png";

const PokemonsContainer = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPokemon, setCurrentPokemon] = useState<unknown>(null);
  const capturedPokemons = useSelector(
    (state: RootState) => state.pokemons.capturedPokemons
  );

  const pokemonClickHandler = (pokemonId: number) => {
    const clickedPokemon = capturedPokemons
      .slice(-6)
      .find((pokemon) => pokemon[0].id === pokemonId);
    if (clickedPokemon) {
      setCurrentPokemon(clickedPokemon);
      setShowModal(true);
    }
  };

  const lastSixPokemonsCaught = capturedPokemons.slice(-6);

  const newPokemonClickHandler = () => {
    //TODO: Create and implement the function for a new pokemon
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <S.Wrapper>
      {showModal && (
        <CapturedPokemonModal
          pokemonData={currentPokemon}
          onClose={handleModalClose}
        />
      )}
      <PokemonButton
        icon={
          lastSixPokemonsCaught.length !== 0 &&
          lastSixPokemonsCaught[0][0].imageURL
            ? lastSixPokemonsCaught[0][0].imageURL
            : questionMark
        }
        onClick={() =>
          lastSixPokemonsCaught.length !== 0 &&
          pokemonClickHandler(lastSixPokemonsCaught[0][0].id)
        }
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught.length !== 0 && lastSixPokemonsCaught[1]
            ? lastSixPokemonsCaught[1][0].imageURL
            : questionMark
        }
        onClick={() =>
          lastSixPokemonsCaught.length !== 0 &&
          pokemonClickHandler(lastSixPokemonsCaught[1][0].id)
        }
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught.length !== 0 && lastSixPokemonsCaught[2]
            ? lastSixPokemonsCaught[2][0].imageURL
            : questionMark
        }
        onClick={() =>
          lastSixPokemonsCaught.length !== 0 &&
          pokemonClickHandler(lastSixPokemonsCaught[2][0].id)
        }
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught.length !== 0 && lastSixPokemonsCaught[3]
            ? lastSixPokemonsCaught[3][0].imageURL
            : questionMark
        }
        onClick={() =>
          lastSixPokemonsCaught.length !== 0 &&
          pokemonClickHandler(lastSixPokemonsCaught[3][0].id)
        }
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught.length !== 0 && lastSixPokemonsCaught[4]
            ? lastSixPokemonsCaught[4][0].imageURL
            : questionMark
        }
        onClick={() =>
          lastSixPokemonsCaught.length !== 0 &&
          pokemonClickHandler(lastSixPokemonsCaught[4][0].id)
        }
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught.length !== 0 && lastSixPokemonsCaught[5]
            ? lastSixPokemonsCaught[5][0].imageURL
            : questionMark
        }
        onClick={() =>
          lastSixPokemonsCaught.length !== 0 &&
          pokemonClickHandler(lastSixPokemonsCaught[5][0].id)
        }
      />
      <Button icon={plusIcon} onClick={newPokemonClickHandler} />
    </S.Wrapper>
  );
};

export default PokemonsContainer;
