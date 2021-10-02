import * as S from "./styles";

const SignUp = (): JSX.Element => {
  return (
    <S.SignupBox>
      <S.Title>회원가입</S.Title>
      <S.GuideWord>아이디</S.GuideWord>
      <S.IdInput />
      <S.GuideWord>이름</S.GuideWord>
      <S.Input />
      <S.EventBox>
        <S.PrevButton>이전</S.PrevButton>
        <S.NextButton>다음</S.NextButton>
      </S.EventBox>
    </S.SignupBox>
  );
};

export default SignUp;
