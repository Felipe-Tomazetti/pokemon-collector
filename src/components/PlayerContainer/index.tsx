import { useState } from 'react';
import * as S from './styled';
import Player from '../Player';
import SearchToolTip from "../SearchToolTip";


const PlayerContainer = () => {  
  const [toolTipVisibility, setToolTipVisibility] = useState(false);

  const onHover = () => {
    setToolTipVisibility(!toolTipVisibility)
  };

  return (
    <S.Wrapper>
      <SearchToolTip visibility={toolTipVisibility}/>
      <Player onHover={onHover}/>
    </S.Wrapper>
  );
};

export default PlayerContainer;