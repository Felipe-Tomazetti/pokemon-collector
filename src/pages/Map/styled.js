import styled from "styled-components";
import backgroundImage from "../../assets/images/pageBackground.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;
