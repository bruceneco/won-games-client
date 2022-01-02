import * as S from "./styles";

const Main = ({
  title = "NextJS Boilerplate",
  description = "TypeScript, ReactJS, NextJS and Styled-Components"
}): JSX.Element => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Atom illustration representing react framework"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Programmer in front of code blocks"
    />
  </S.Wrapper>
);

export default Main;
