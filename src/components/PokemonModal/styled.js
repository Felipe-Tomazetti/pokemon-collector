// ModalStyled.js
import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-selft: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  // background-color: #fff;
  background: linear-gradient(to right, #43e97b, #38f9d7);
  border-radius: 1rem;
  padding: 20px;
  height: 80vh;
  width: 40vw;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: #fff;
  top: 10px;
  right: 10px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  border: 0.15rem solid black;
  border-radius: 50%;
  z-index: 2;
`;

export const PokemonInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  backgroud-color: white;
  z-index: 1;
`;

export const PokemonImageWrapper = styled.div`
  width: 16rem;
  height: 16rem;
  margin-top: 2rem;
  background-color: white;
  border: 4px solid #00ff00;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const PokemonName = styled.h2`
  margin: 10px 0;
`;

export const PokemonStats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

export const PokemonType = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin: 5px;
    padding: 5px 10px;
    background-color: #00ff00;
    border-radius: 5px;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PokemonTypeTags = styled.span``;

export const PokemonAbilities = styled.div`
  margin: 10px 0;
`;

export const CaptureButton = styled.img`
  background: transparent;
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  z-index: 3;
`;

export const VerticalSeparator = styled.div`
  border-left: 1px solid #ccc;
  height: 50px; /* Adjust the height to match your design */
  margin: 0 20px; /* Adjust the margin to control the spacing */
`;

export const HorizontalSeparator = styled.div`
  border-left: 1px solid #ccc;
  width: 50px; /* Adjust the height to match your design */
  margin: 0 20px; /* Adjust the margin to control the spacing */
`;
