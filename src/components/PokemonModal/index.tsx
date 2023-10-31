import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { pokemonActions } from "../../store/slices/pokemonSlice";
import pokeball from "../../assets/images/pokeball.png";
import * as S from "./styled";

interface PokemonData {
  id: number;
  name: string;
  hp: number;
  height: number;
  weight: number;
  imageURL: string;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

interface PokemonModalProps {
  onClose: () => void;
  pokemonData: PokemonData;
}

const PokemonModal: React.FC<PokemonModalProps> = ({
  onClose,
  pokemonData,
}) => {
  const currentPokemon = useSelector(
    (state: RootState) => state.pokemons.currentPokemonFound
  );
  const dispatch = useDispatch();

  const captureHandler = () => {
    dispatch(pokemonActions.capturePokemon(currentPokemon));
    onClose();
  };

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        <S.PokemonImageWrapper>
          <img
            src={pokemonData[0].imageURL}
            alt={"Pokemon"}
            height="300"
            width="300"
          />
        </S.PokemonImageWrapper>
        <S.MainContentWrapper>
          <S.PokemonInfo>
            <S.PokemonName>{pokemonData[0].name.toUpperCase()}</S.PokemonName>
            <S.PokemonStats>
              <S.StatsWrapper>
                <strong>HP</strong>
                <strong>
                  {pokemonData[0].hp}/{pokemonData[0].hp}
                </strong>
              </S.StatsWrapper>
              <S.VerticalSeparator />
              <S.StatsWrapper>
                <strong>ALTURA</strong>
                <strong>{pokemonData[0].height} m</strong>
              </S.StatsWrapper>
              <S.VerticalSeparator />
              <S.StatsWrapper>
                <strong>PESO</strong>
                <strong>{pokemonData[0].weight} kg</strong>
              </S.StatsWrapper>
            </S.PokemonStats>
            <S.PokemonType>
              <S.TypeWrapper>
                <S.HorizontalSeparator />
                <strong>TIPO</strong>
                <S.HorizontalSeparator />
              </S.TypeWrapper>
              <S.TagWrapper>
                {pokemonData[0].types.map((type) => (
                  <S.PokemonTypeTags
                    key={type.type.name}
                    type={type.type.name.toUpperCase()}
                  >
                    <span>{type.type.name.toUpperCase()}</span>
                  </S.PokemonTypeTags>
                ))}
              </S.TagWrapper>
            </S.PokemonType>
            <S.PokemonAbilities>
              <S.TypeWrapper>
                <S.HorizontalSeparator />
                <strong>HABILIDADES</strong>
                <S.HorizontalSeparator />
              </S.TypeWrapper>
              {pokemonData[0].abilities.map((ability) => (
                <S.AbilityTags key={ability.ability.name}>
                  {ability.ability.name.toUpperCase()} -
                </S.AbilityTags>
              ))}
            </S.PokemonAbilities>
          </S.PokemonInfo>
          <S.CaptureButton
            onClick={captureHandler}
            src={pokeball}
            alt="Capture"
          />
        </S.MainContentWrapper>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default PokemonModal;
