import * as S from "./styled";
import searchToolTip from "../../assets/images/searchToolTip.png";

interface SearchToolTipProps {
  visibility: boolean;
}

const SearchToolTip = ({ visibility }: SearchToolTipProps) => {
  return (
    <S.Wrapper visibility={visibility}>
      <S.Img src={searchToolTip} />
    </S.Wrapper>
  );
};

export default SearchToolTip;
