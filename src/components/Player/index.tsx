import * as S from './styled';
import ashFront from '../../assets/images/ashFront.png';

interface PlayerProps {
  onHover: () => void;
}

const Player = ({ onHover }: PlayerProps) => {
  return (
    <S.Wrapper onMouseEnter={onHover} onMouseLeave={onHover}>
      <S.Img src={ashFront} />
    </S.Wrapper>
  )
};

export default Player;