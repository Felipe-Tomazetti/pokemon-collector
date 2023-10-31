import { useRouteError } from "react-router-dom";
import * as S from "./styled";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <S.Wrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </S.Wrapper>
  );
}
