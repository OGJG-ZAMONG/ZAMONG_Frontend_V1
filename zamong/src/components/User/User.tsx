import * as S from "./styles";

const User = () => {
  return (
    <S.Outer>
      <S.Container>
        <S.ProfileContainer>
          <S.ProfileImage />
          <span>kjg2004</span>
        </S.ProfileContainer>
        <S.ButtonContainer>
          <span>팔로우를 시작한 날짜 : 7월 21일</span>
          <S.BlueButton>팔로우</S.BlueButton>
        </S.ButtonContainer>
      </S.Container>
      <S.Line />
    </S.Outer>
  );
};

export default User;
