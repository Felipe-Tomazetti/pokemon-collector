import * as S from "./styled";

interface ButtonProps {
  onClick: () => void;
  icon?: string;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, icon, text }) => {
  return (
    <S.ButtonWrapper className={`${icon ? "icon" : ""}`} onClick={onClick}>
      {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
    </S.ButtonWrapper>
  );
};

export default Button;
