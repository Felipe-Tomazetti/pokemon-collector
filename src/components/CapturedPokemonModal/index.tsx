import { useDispatch } from "react-redux";
import { pokemonActions } from "../../store/slices/pokemonSlice";
import Button from "../Button";
import * as S from "./styled";
import attackIcon from "../../assets/icons/attack.png";
import defenseIcon from "../../assets/icons/defense.png";
import moveSpeedIcon from "../../assets/icons/velocity.png";

interface PokemonData {
  id: number;
  name: string;
  hp: number;
  height: number;
  weight: number;
  imageURL: string;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: {
    defense: number;
    attack: number;
    specialDefense: number;
    specialAttack: number;
    moveSpeed: number;
  };
}

interface CapturedPokemonModalProps {
  onClose: () => void;
  pokemonData: PokemonData;
}

const CapturedPokemonModal: React.FC<CapturedPokemonModalProps> = ({
  onClose,
  pokemonData,
}) => {
  const dispatch = useDispatch();

  const currentPokemon = pokemonData[0];

  const releasePokemonHandler = async (pokemonId: number) => {
    await dispatch(pokemonActions.releasePokemon(pokemonId));
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
                  <S.PokemonTypeTags type={type.type.name.toUpperCase()}>
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
                <S.AbilityTags>
                  {ability.ability.name.toUpperCase()} -
                </S.AbilityTags>
              ))}
            </S.PokemonAbilities>
            <S.PokemonStatistics>
              <S.TypeWrapper>
                <S.HorizontalSeparator />
                <strong>ESTATÍSTICAS</strong>
                <S.HorizontalSeparator />
              </S.TypeWrapper>
              <S.StatisticsWrapper>
                <S.StatWrapper>
                  <S.StatIcon src={defenseIcon} width={16} height={16} />
                  <S.StatText>DEFESA</S.StatText>
                  {pokemonData[0].stats.defense}
                </S.StatWrapper>
                <S.StatWrapper>
                  <S.StatIcon src={attackIcon} width={16} height={16} />
                  <S.StatText>ATAQUE</S.StatText>
                  {pokemonData[0].stats.attack}
                </S.StatWrapper>
                <S.StatWrapper>
                  <S.StatIcon src={defenseIcon} width={16} height={16} />
                  <S.StatText>DEFESA ESPECIAL</S.StatText>
                  {pokemonData[0].stats.specialDefense}
                </S.StatWrapper>
                <S.StatWrapper>
                  <S.StatIcon src={attackIcon} width={16} height={16} />
                  <S.StatText>ATAQUE ESPECIAL</S.StatText>
                  {pokemonData[0].stats.specialAttack}
                </S.StatWrapper>

                <S.StatWrapper>
                  <S.StatIcon src={moveSpeedIcon} width={16} height={16} />{" "}
                  <S.StatText>VELOCIDADE</S.StatText>
                  <S.StatNumber>{pokemonData[0].stats.moveSpeed}</S.StatNumber>
                </S.StatWrapper>
              </S.StatisticsWrapper>
            </S.PokemonStatistics>
          </S.PokemonInfo>
          <S.ButtonWrapper>
            <Button
              text={"LIBERAR POKEMON"}
              onClick={() => releasePokemonHandler(currentPokemon.id)}
              icon={""}
            />
          </S.ButtonWrapper>
        </S.MainContentWrapper>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default CapturedPokemonModal;
