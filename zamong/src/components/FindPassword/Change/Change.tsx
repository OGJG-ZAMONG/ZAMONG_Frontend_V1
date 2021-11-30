import { stringify } from "querystring";
import { useEffect, useState } from "react";
import * as S from "./styles";

type propsType = {
  prev: () => void;
};

const Change = ({ prev }: propsType) => {
  const [inputs, setInputs] = useState({
    inputPw: "",
    isPw: false,
    pwErrorText: "",
    inputPwCheck: "",
    isPwCheck: false,
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
        isPw: false,
      });
    } else if (inputPwCheck !== inputPw) {
      setInputs({
        ...inputs,
        pwCheckErrorText: "비밀번호가 맞지 않습니다.",
        isPw: false,
      });
    } else {
      setInputs({
        ...inputs,
        pwCheckErrorText: "",
        isPw: true,
      });
    }
  }, [inputPwCheck]);

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
          <S.PrevButton onClick={prev}>이전</S.PrevButton>
          <S.NextButton>변경</S.NextButton>
        </S.EventBox>
      </S.PaddingBox>
    </S.ChangeBox>
  );
};

export default Change;
