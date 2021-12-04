import * as S from "./styles";

const UserSkeleton = () => {
  return (
    <S.Outer>
      <S.Container>
        <S.DivContainer>
          <S.Img />
          <S.Div />
        </S.DivContainer>
        <S.DivContainer>
          <S.Div />
          <S.Button />
        </S.DivContainer>
      </S.Container>
      <S.Line />
    </S.Outer>
  );
};

export default UserSkeleton;
