import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 1.4rem 1.6rem;
  background-color: #ff3d71;
  border: 1px solid #ff3d71;
  border-radius: 4rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  box-shadow: 0 0.8rem 1rem rgba(0, 0, 0, 0.3);

  &.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border: 4px solid #db2c66;
    padding: 0;
  }

  &:hover {
    background-color: #db2c66;
  }
`;

export const Icon = styled.img``;

export const Text = styled.span``;
