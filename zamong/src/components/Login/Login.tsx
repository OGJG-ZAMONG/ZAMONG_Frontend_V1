import * as S from "./Style";
import { Link } from "react-router-dom";

const Login = (): JSX.Element => {
  return (
    <S.LoginBox>
      <S.Title>로그인</S.Title>
      <S.MainContainer>
        <S.GuideWord>이메일</S.GuideWord>
        <S.Input type="text" />
        <S.GuideWord>비밀번호</S.GuideWord>
        <S.Input type="password" />
        <S.EventBox>
          <S.LinkBox>
            <span>
              비밀번호를 잊으셨나요?
              <Link to="/"> 비밀번호 찾기</Link>
            </span>
          </S.LinkBox>
          <S.LoginButton>
            <S.LoginInput type="submit" value="로그인" />
          </S.LoginButton>
        </S.EventBox>
      </S.MainContainer>
      <S.RegisterContainer>
        <S.LinkBox>
          <span>신규 사용자이신가요?</span>
          <Link to="/"> 회원가입</Link>
        </S.LinkBox>
      </S.RegisterContainer>
    </S.LoginBox>
  );
};

export default Login;
