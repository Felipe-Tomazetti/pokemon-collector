import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
`;

export const Img = styled.img`
  display: block;
`;
