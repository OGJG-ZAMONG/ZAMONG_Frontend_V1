import * as S from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { login } from "../../utils/api/Login";

const Login = (): JSX.Element => {
  const [userIdentity, setUserIdentity] = useState("");
  const [userPassWord, setUserPassWord] = useState("");
  const { push } = useHistory();

  const idChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUserIdentity(value);
  };

  const pwChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUserPassWord(value);
  };

  const onRequest = async () => {
    const data = {
      user_identity: userIdentity,
      password: userPassWord,
    };
    try {
      await login(data);
      alert("로그인에 성공하셨습니다.");
      push("/");
    } catch {
      alert("로그인에 실패하셨습니다.");
    }
  };

  const keyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onRequest();
    }
  };

  const signUp = () => {
    push('/signup');
  }

  return (
    <S.LoginBox>
      <S.PaddingBox>
        <S.Title>로그인</S.Title>
        <S.MainContainer>
          <S.GuideWord>이메일 / 아이디</S.GuideWord>
          <S.Input
            name="userIdentity"
            value={userIdentity}
            type="text"
            onChange={idChange}
          />
          <S.GuideWord>비밀번호</S.GuideWord>

          <S.Input
            name="pw"
            value={userPassWord}
            type="password"
            onChange={pwChange}
            onKeyUp={keyUp}
          />
          <S.EventBox>
            <S.LinkBox>
              <span>비밀번호를 잊으셨나요?&nbsp;</span>
              <Link to="/findpassword"> 비밀번호 찾기</Link>
            </S.LinkBox>
            <S.LoginButton onClick={onRequest}>로그인</S.LoginButton>
          </S.EventBox>
          <S.SignUpLink>
            신규 사용자이신가요?&nbsp;<S.Link onClick={signUp}>회원가입</S.Link>
          </S.SignUpLink>
        </S.MainContainer>
      </S.PaddingBox>
    </S.LoginBox>
  );
};

export default Login;
