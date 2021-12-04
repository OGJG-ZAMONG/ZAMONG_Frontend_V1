import * as S from "./styles";
import { useState } from "react";
import { useHistory } from "react-router";
import { sendPwEmail } from "../../utils/api/FindPassword";

const FindPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [canRequest, setCanRequest] = useState<boolean>(true);
  const { push } = useHistory();

  const emailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setEmail(value);
  };

  const getPw = async () => {
    if (!canRequest) {
      return;
    }

    setCanRequest(false);

    setTimeout(() => {
      setCanRequest(true);
    }, 3000);

    try {
      sendPwEmail(email);
    } catch (error) {
      console.log(error);
    }
  };

  const emailCheck = (email: string) => {
    const emailTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z\-]+\.[A-Za-z\-]+/;
    if (!email.length) {
      alert("이메일을 입력해주세요");
    } else if (email.length && !emailTest.test(email)) {
      alert("이메일 형식이 맞지 않습니다.");
    } else {
      getPw();
    }
  };

  const keyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      emailCheck(email);
    }
  };

  const linkLogin = () => {
    push("/");
  };

  return (
    <S.FindBox>
      <S.PaddingBox>
        <S.Title>비밀번호 찾기</S.Title>
        <S.GuideWord>이메일</S.GuideWord>
        <S.Input
          name="email"
          value={email}
          onChange={emailChange}
          onKeyUp={keyUp}
        />
        <S.EventBox>
          <S.PrevButton onClick={linkLogin}>이전</S.PrevButton>
          <S.NextButton
            onClick={() => emailCheck(email)}
            disabled={!canRequest}
          >
            요청
          </S.NextButton>
        </S.EventBox>
      </S.PaddingBox>
    </S.FindBox>
  );
};

export default FindPassword;
