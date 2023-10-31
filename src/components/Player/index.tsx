import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ashFront from "../../assets/images/ashFront.png";
import ashSide_1 from "../../assets/images/ashRightLeg.png";
import ashSide_2 from "../../assets/images/ashLeftLeg.png";
import * as S from "./styled";

interface PlayerProps {
  onHover: () => void;
  onClick: () => void;
}

const Player = ({ onHover, onClick }: PlayerProps) => {
  const walkingStatus = useSelector((state) => state.walking.isWalking);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [ashSide_1, ashSide_2];

  const toggleImages = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (walkingStatus) {
      const interval = setInterval(toggleImages, 300);
      return () => {
        clearInterval(interval);
      };
    }
  }, [walkingStatus]);

  return (
    <S.Wrapper onMouseEnter={onHover} onMouseLeave={onHover} onClick={onClick}>
      <S.Img src={walkingStatus ? images[currentImageIndex] : ashFront} />
    </S.Wrapper>
  );
};

export default Player;
