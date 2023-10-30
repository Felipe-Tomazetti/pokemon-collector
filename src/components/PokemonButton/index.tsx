import * as S from "./styled";

interface PokemonButtonProps {
  onClick: () => void;
  icon: string;
}

const PokemonButton = ({ onClick, icon }: PokemonButtonProps) => {
  return (
    <S.ButtonWrapper className={`${icon ? "icon" : ""}`} onClick={onClick}>
      {icon ? <S.Icon src={icon} /> : <></>}
    </S.ButtonWrapper>
  );
};

export default PokemonButton;
