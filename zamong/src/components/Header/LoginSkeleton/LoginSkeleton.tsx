import * as S from "./styles";

const LoginSkeleton = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.NavContainer>
          <S.Nav>꿈 해몽</S.Nav>
          <S.Nav>꿈 해몽</S.Nav>
          <S.Nav>꿈 해몽</S.Nav>
          <S.Nav>꿈 해몽</S.Nav>
        </S.NavContainer>
        <S.NavContainer>
          <S.Circle />
          <S.Nav>꿈 해몽</S.Nav>
        </S.NavContainer>
        <S.BorderButton />
      </S.Container>
    </>
  );
};

export default LoginSkeleton;
