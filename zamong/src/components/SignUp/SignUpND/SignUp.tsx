import { authEnticationCode } from "../../../utils/api/SignUp";
import { useEffect, useState } from "react";
import * as S from "./styles";

type FunctionType = {
  change: (e: React.FormEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onPrev: () => void;
};

type PropsType = {
  functions: FunctionType;
  email: string;
  pw: string;
  checkPw: string;
};

const SignUpND = ({
  functions,
  email,
  pw,
  checkPw,
}: PropsType): JSX.Element => {
  const { change, onNext, onPrev } = functions;

  useEffect(() => {
    emailCheck(email);
  }, [email]);

  useEffect(() => {
    pwCheck(pw);
  }, [pw]);

  useEffect(() => {
    checkPwCheck(checkPw);
  }, [checkPw]);


  const emailNull = (email: string) => {
    if (email.length === 0) {
      setEmailErrorText("이메일을 입력하셔야 합니다.");
      setEmailTrue(false);
    } else {
      setEmailTrue(true);
    }
  };

  const pwNull = (pw: string) => {
    if (pw.length === 0) {
      setPwErrorText("비밀번호를 입력하셔야 합니다.");
      setPwTrue(false);
    } else {
      setPwTrue(true);
    }
  };

  const checkPwNull = (checkPw: string) => {
    if (checkPw.length === 0) {
      setCheckPwErrorText("비밀번호 확인을 입력하셔야 합니다.");
      setCheckPwTrue(false);
    } else {
      setCheckPwTrue(true);
    }
  };

  const emailCheck = (email: string) => {
    const emailTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z\-]+\.[A-Za-z\-]+/;
    if (!email.length) {
      setEmailErrorText("");
      setEmailTrue(false);
    } else if (email.length && !emailTest.test(email)) {
      setEmailErrorText("이메일 형식이 맞지 않습니다.");
      setEmailTrue(false);
    } else {
      setEmailErrorText("");
      setEmailTrue(true);
    }
  };

  const pwCheck = (pw: string) => {
    const specialTest = /\W+/;
    const numberTest = /\d+/;
    if (!pw.length) {
      setPwErrorText("");
      setPwTrue(false);
    } else if (pw.length < 8 && pw.length > 0) {
      setPwErrorText("비밀번호는 최소 8글자 이상이어야 합니다.");
      setPwTrue(false);
    } else if (pw.length > 16) {
      setPwErrorText("비밀번호는 최대 16글자 이하여야 합니다.");
      setPwTrue(false);
    } else if (pw.length && !numberTest.test(pw)) {
      setPwErrorText("숫자가 최소 1개 이상 포함돼야 합니다.");
    } else if (pw.length && !specialTest.test(pw)) {
      setPwErrorText("특수문자가 최소 1개 이상 포함돼야 합니다.");
    } else {
      setPwErrorText("");
      setPwTrue(true);
    }
  };

  const checkPwCheck = (checkPw: string) => {
    if (!checkPw.length) {
      setCheckPwErrorText("");
      setCheckPwTrue(false);
    } else if (checkPw.length && checkPw !== pw) {
      setCheckPwErrorText("비밀번호가 맞지 않습니다.");
      setCheckPwTrue(false);
    } else {
      setCheckPwErrorText("");
      setCheckPwTrue(true);
    }
  };

  const [emailErrorText, setEmailErrorText] = useState("");
  const [emailTrue, setEmailTrue] = useState(false);
  const [pwErrorText, setPwErrorText] = useState("");
  const [pwTrue, setPwTrue] = useState(false);
  const [checkPwErrorText, setCheckPwErrorText] = useState("");
  const [checkPwTrue, setCheckPwTrue] = useState(false);
  
  const onNextHandler = async () => {
    emailNull(email);
    pwNull(pw);
    checkPwNull(checkPw);
    if (emailTrue && pwTrue && checkPwTrue) {
      try {
        authEnticationCode(email);
        onNext();
      } catch (e) {
        alert("이메일 전송에 실패했습니다.");
      }
    }
  };

  return (
    <S.SignupBox>
      <S.PaddingBox>
        <S.Title>회원가입</S.Title>
        <S.GuideContaier>
          <S.GuideWord>이메일</S.GuideWord>
          <S.ErrorMessage>{emailErrorText}</S.ErrorMessage>
        </S.GuideContaier>
        <S.Input
          name="email"
          value={email}
          onChange={change}
          autoComplete="off"
        />
        <S.GuideContaier>
          <S.GuideWord>비밀번호</S.GuideWord>
          <S.ErrorMessage>{pwErrorText}</S.ErrorMessage>
        </S.GuideContaier>
        <S.Input
          type="password"
          name="pw"
          value={pw}
          onChange={change}
          autoComplete="off"
        />
        <S.GuideContaier>
          <S.GuideWord>비밀번호 확인</S.GuideWord>
          <S.ErrorMessage>{checkPwErrorText}</S.ErrorMessage>
        </S.GuideContaier>
        <S.Check
          type="password"
          name="checkPw"
          value={checkPw}
          onChange={change}
          autoComplete="off"
        />
        <S.EventBox>
          <S.PrevButton onClick={onPrev}>이전</S.PrevButton>
          <S.NextButton onClick={onNextHandler}>다음</S.NextButton>
        </S.EventBox>
      </S.PaddingBox>
    </S.SignupBox>
  );
};

export default SignUpND;
