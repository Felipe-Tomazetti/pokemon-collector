import * as S from './styled';

interface ButtonProps {
  onClick: () => void;
  icon: string;
  text: string;
}

const Button = ({onClick, icon = '' , text}: ButtonProps) => {
  return (
    <S.ButtonWrapper className={`${icon ? "icon" : ""}`} onClick={onClick}>
      {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
    </S.ButtonWrapper>
  )
};

export default Button;