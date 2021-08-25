import * as S from "./Style";

// To do
// const Focus = (e) => {
//   const { maxLength , value , index }
// }

const Login = (): JSX.Element => {
  return (
    <S.SignupBox>
      <S.Title>회원가입</S.Title>
      <S.Main>
        <S.GuideWord>이메일 인증</S.GuideWord>
        <S.NumberContainer>
          <S.NumberBox maxLength={1}/>
          <S.NumberBox />
          <S.NumberBox />
          <S.NumberBox />
          <S.NumberBox />
          <S.NumberBox />
        </S.NumberContainer>
      </S.Main>
      <S.EventBox>
        <S.PrevButton>이전</S.PrevButton>
        <S.NextButton>다음</S.NextButton>
      </S.EventBox>
    </S.SignupBox>
  );
};

export default Login;