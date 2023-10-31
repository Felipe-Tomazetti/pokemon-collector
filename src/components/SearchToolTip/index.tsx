import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as S from "./styled";
import searchToolTip from "../../assets/images/searchToolTip.png";
import searchingToolTip from "../../assets/images/searchingTooltip.png";

type SearchToolTipProps = {
  visibility: boolean;
};

const SearchToolTip = ({ visibility }: SearchToolTipProps) => {
  const walkingStatus = useSelector((state) => state.walking.isWalking);
  const visible = true;

  return (
    <S.Wrapper visibility={walkingStatus ? visible : visibility}>
      <S.Img src={walkingStatus ? searchingToolTip : searchToolTip} />
    </S.Wrapper>
  );
};

export default SearchToolTip;
