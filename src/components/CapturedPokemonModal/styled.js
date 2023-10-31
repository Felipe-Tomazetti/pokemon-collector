import styled from "styled-components";

const typeColors = {
  NORMAL: "#C4C0B4",
  BUG: "#87950C",
  DARK: "#413831",
  DRAGON: "#7361D1",
  ELECTRIC: "#E08D00",
  FLYING: "#8FA4FF",
  ICE: "#B4EDF8",
  STEEL: "#7F8488",
  FIRE: "#CF2C03",
  GROUND: "#C5A455",
  ROCK: "#5E491C",
  FIGHTING: "#852816",
  GRASS: "#67AF32",
  PSYCHIC: "#E25484",
  FAIRY: "#E29FE6",
  GHOST: "#6969AF",
  POISON: "#924990",
  WATER: "#3B9BF1",
};

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-selft: center;
  z-index: 999;
  padding-bottom: 20rem;
`;

export const ModalContent = styled.div`
  // background-color: #fff;
  background: linear-gradient(to right, #43e97b, #38f9d7);
  border-radius: 1rem;
  padding-top: 20px;
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
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 10rem;
  border: 0.15rem solid black;
  border-radius: 50%;
  z-index: 2;
  height: 2rem;
  width; 2rem;
`;

export const MainContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  padding-top: 7rem;
  margin-top: 9rem;
`;

export const PokemonInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const PokemonImageWrapper = styled.div`
  width: 16rem;
  height: 16rem;
  background-color: white;
  border: 4px solid #00d68f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const PokemonName = styled.h2`
  margin-top: 2rem;
  color: #2e3a59;
`;

export const PokemonStats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4rem;
  margin: 2rem;
  color: #2e3a59;
`;

export const PokemonType = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin: 5px;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PokemonTypeTags = styled.span`
  background-color: ${({ type }) => typeColors[type] || "#c4c0b4"};
  color: white;
`;

export const PokemonAbilities = styled.div`
  margin: 10px 0;
`;

export const PokemonStatistics = styled.div`
  margin: 10px 0;
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatNumber = styled.text`
  display: flex;
  align-items: flex-start;
`;

export const StatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatText = styled.strong``;

export const StatIcon = styled.img``;

export const ButtonWrapper = styled.div`
  cursor: pointer;
  z-index: 3;
  position: fixed;
`;

export const VerticalSeparator = styled.div`
  border-left: 1px solid #ccc;
  height: 50px;
  margin: 0 20px;
`;

export const HorizontalSeparator = styled.div`
  border-bottom: 0.1rem solid #ccc;
  width: 8rem;
  align-self: center;
  margin-inline: 1rem;
`;

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AbilityTags = styled.span`
  display: flex;
  justify-content: center;
`;
