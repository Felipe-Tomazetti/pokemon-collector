import React from "react";
import * as S from "./styled";

interface PokemonButtonProps {
  onClick: () => void;
  icon: "questionMarkIcon" | "capturedPokemonIcon" | "";
}

const PokemonButton: React.FC<PokemonButtonProps> = ({ onClick, icon }) => {
  const questionMark = icon.includes("questionMarkIcon");
  return (
    <S.ButtonWrapper
      className={`${icon ? "icon" : ""} ${!questionMark ? "captured" : ""}`}
      onClick={onClick}
    >
      {icon ? (
        <S.Icon className={`${!questionMark ? "captured" : ""}`} src={icon} />
      ) : (
        <></>
      )}
    </S.ButtonWrapper>
  );
};

export default PokemonButton;
