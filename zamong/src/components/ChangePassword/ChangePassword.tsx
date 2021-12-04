import { stringify } from "querystring";
import { useEffect, useState } from "react";
import * as S from "./styles";

const ChangePassword = () => {
  const [inputs, setInputs] = useState({
    inputPw: "",
    pwErrorText: "",
    inputPwCheck: "",
    pwCheckErrorText: "",
  });

  const { inputPw, pwErrorText, inputPwCheck, pwCheckErrorText } = inputs;

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({
        ...inputs,
        [name]: value,
    });
  };

  useEffect(() => {
    if (!inputPwCheck.length) {
      setInputs({
        ...inputs,
        pwCheckErrorText: "",
      });
    } else if (inputPwCheck !== inputPw) {
      setInputs({
        ...inputs,
        pwCheckErrorText: "비밀번호가 맞지 않습니다.",
      });
    } else {
      setInputs({
        ...inputs,
        pwCheckErrorText: "",
      });
    }
  }, [inputPwCheck, inputPw]);

  return (
    <S.ChangeBox>
      <S.PaddingBox>
        <S.Title>비밀번호 변경</S.Title>
        <S.GuideContaier>
          <S.GuideWord>비밀번호</S.GuideWord>
          <S.ErrorMessage>{pwErrorText}</S.ErrorMessage>
        </S.GuideContaier>
        <S.Input
          name="inputPw"
          value={inputPw}
          type="password"
          onChange={change}
        />
        <S.GuideContaier>
          <S.GuideWord>비밀번호 확인</S.GuideWord>
          <S.ErrorMessage>{pwCheckErrorText}</S.ErrorMessage>
        </S.GuideContaier>
        <S.Input
          name="inputPwCheck"
          value={inputPwCheck}
          type="password"
          onChange={change}
        />
        <S.EventBox>
          <S.NextButton>변경</S.NextButton>
        </S.EventBox>
      </S.PaddingBox>
    </S.ChangeBox>
  );
};

export default ChangePassword;
