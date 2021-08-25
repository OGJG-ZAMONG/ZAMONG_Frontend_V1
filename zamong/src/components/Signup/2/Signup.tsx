import * as S from "./Style";

const Login = (): JSX.Element => {
  return (
    <S.SignupBox>
      <S.Title>회원가입</S.Title>
      <S.GuideWord>이메일</S.GuideWord>
      <S.Input />
      <S.GuideWord>비밀번호</S.GuideWord>
      <S.Input type="password"/>
      <S.GuideWord>비밀번호 확인</S.GuideWord>
      <S.Check type="password"/>
      <S.EventBox>
        <S.PrevButton>이전</S.PrevButton>
        <S.NextButton>다음</S.NextButton>
      </S.EventBox>
    </S.SignupBox>
  );
};

export default Login;
