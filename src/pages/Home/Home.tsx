import { Link } from "react-router-dom";
import Button from "../../components/Button";
import * as S from "./styled";
import PokemonImg from "../../assets/images/pokemonLogo.png";

const Home = () => {
  return (
    <S.Wrapper>
      <S.Img src={PokemonImg} />
      <Link to={"/map"}>
        <Button text={"Start"} onClick={(): void => {}} icon={""} />
      </Link>
    </S.Wrapper>
  );
};
export default Home;
