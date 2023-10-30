import * as S from "./styled";
import ashFront from "../../assets/images/ashFront.png";

interface PlayerProps {
  onHover: () => void;
  onClick: () => void;
}

const Player = ({ onHover, onClick }: PlayerProps) => {
  return (
    <S.Wrapper onMouseEnter={onHover} onMouseLeave={onHover} onClick={onClick}>
      <S.Img src={ashFront} />
    </S.Wrapper>
  );
};

export default Player;
