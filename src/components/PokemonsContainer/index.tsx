import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";
import PokemonButton from "../PokemonButton";
import CapturedPokemonModal from "../CapturedPokemonModal";
import * as S from "./styled";
import plusIcon from "../../assets/icons/plusIcon.png";
import questionMark from "../../assets/icons/questionMarkIcon.png";

const PokemonsContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const capturedPokemons = useSelector(
    (state) => state.pokemons.capturedPokemons
  );

  const pokemonClickHandler = (pokemonId) => {
    const clickedPokemon = capturedPokemons
      .slice(-6)
      .find((pokemon) => pokemon[0].id === pokemonId);
    if (clickedPokemon) {
      setCurrentPokemon(clickedPokemon);
      setShowModal(true);
    }
  };

  const lastSixPokemonsCaught = capturedPokemons.slice(-6);

  const newPokemonClickHandler = () => {};

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
      {/* {capturedPokemons.slice(-6).map((pokemon) => (
        <PokemonButton
          key={pokemon.id}
          icon={pokemon[0].imageURL ? pokemon[0].imageURL : questionMark}
          onClick={() => pokemonClickHandler(pokemon.id)}
        />
      ))} */}
      <PokemonButton
        icon={
          lastSixPokemonsCaught[0][0] && lastSixPokemonsCaught[0][0].imageURL
            ? lastSixPokemonsCaught[0][0].imageURL
            : questionMark
        }
        onClick={() => pokemonClickHandler(lastSixPokemonsCaught[0][0].id)}
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught[1][0] && lastSixPokemonsCaught[1][0].imageURL
            ? lastSixPokemonsCaught[1][0].imageURL
            : questionMark
        }
        onClick={() => pokemonClickHandler(lastSixPokemonsCaught[1][0].id)}
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught[2][0] && lastSixPokemonsCaught[2][0].imageURL
            ? lastSixPokemonsCaught[2][0].imageURL
            : questionMark
        }
        onClick={() => pokemonClickHandler(lastSixPokemonsCaught[2][0].id)}
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught[3][0] && lastSixPokemonsCaught[3][0].imageURL
            ? lastSixPokemonsCaught[3][0].imageURL
            : questionMark
        }
        onClick={() => pokemonClickHandler(lastSixPokemonsCaught[3][0].id)}
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught[4][0] && lastSixPokemonsCaught[4][0].imageURL
            ? lastSixPokemonsCaught[4][0].imageURL
            : questionMark
        }
        onClick={() => pokemonClickHandler(lastSixPokemonsCaught[4][0].id)}
      />
      <PokemonButton
        icon={
          lastSixPokemonsCaught[5][0] && lastSixPokemonsCaught[5][0].imageURL
            ? lastSixPokemonsCaught[5][0].imageURL
            : questionMark
        }
        onClick={() => pokemonClickHandler(lastSixPokemonsCaught[5][0].id)}
      />
      <Button icon={plusIcon} onClick={newPokemonClickHandler} />
    </S.Wrapper>
  );
};

export default PokemonsContainer;
