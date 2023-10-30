import * as S from "./styled";
import ash from "../../assets/images/ashFront.png";
import pokeball from "../../assets/images/pokeball.png";

const PokemonModal = ({ onClose, pokemonData }) => {
  const captureHandler = () => {
    console.log("caputrado");
    onClose();
  };
  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        <S.PokemonImageWrapper>
          <img src={ash} alt={"teste"} />
        </S.PokemonImageWrapper>
        <S.PokemonInfo>
          <S.PokemonName>Bulba</S.PokemonName>
          <S.PokemonStats>
            <S.StatsWrapper>
              <strong>HP</strong>
              <strong>100</strong>
            </S.StatsWrapper>
            <S.VerticalSeparator />
            <S.StatsWrapper>
              <strong>Height</strong>
              <strong>100</strong>
            </S.StatsWrapper>
            <S.VerticalSeparator />
            <S.StatsWrapper>
              <strong>Weight</strong>
              <strong>100</strong>
            </S.StatsWrapper>
          </S.PokemonStats>
          <S.PokemonType>
            <S.HorizontalSeparator /> Tipo <S.HorizontalSeparator />
            <S.TagWrapper>
              <S.PokemonTypeTags>
                <span>Grama</span>
              </S.PokemonTypeTags>
              <S.PokemonTypeTags>
                <span>Grama</span>
              </S.PokemonTypeTags>
            </S.TagWrapper>
          </S.PokemonType>
          <S.PokemonAbilities>Abilities: Neles</S.PokemonAbilities>
        </S.PokemonInfo>
        <S.CaptureButton
          onClick={captureHandler}
          src={pokeball}
          alt="Capture"
        />
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default PokemonModal;
