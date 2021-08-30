import * as S from "./Style";

const Login = (): JSX.Element => {
  return (
    <S.LoginBox>
      <S.PaddingBox>
        <S.Title>로그인</S.Title>
        <S.MainContainer>
          <S.GuideWord>이메일</S.GuideWord>
          <S.Input />
          <S.GuideWord>비밀번호</S.GuideWord>
          <S.Input type="password" name="password" />
          <S.EventBox>
            <S.LinkBox>
              <span>
                비밀번호를 잊으셨나요?
                <a href="/"> 비밀번호 찾기</a>
              </span>
            </S.LinkBox>
            <S.LoginButton>로그인</S.LoginButton>
          </S.EventBox>
        </S.MainContainer>
        <S.LinkBox>
          <span>신규 사용자이신가요?</span>
          <a href="/"> 회원가입</a>
        </S.LinkBox>
      </S.PaddingBox>
    </S.LoginBox>
  );
};

export default Login;
