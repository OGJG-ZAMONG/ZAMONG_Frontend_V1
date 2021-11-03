import * as S from "./styles";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";

type propsType = {
  next : () => void;
}

const Find = ( { next } : propsType ) => {
  const { push } = useHistory();
  const [inputs, setInputs] = useState({
    inputEmail: "",
    isEmail: false,
  });

  const { inputEmail , isEmail } = inputs;

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const linkLogin = () => {
    push("/");
  }

  return (
    <S.FindBox>
      <S.PaddingBox>
        <S.Title>비밀번호 찾기</S.Title>
        <S.GuideWord>이메일</S.GuideWord>
        <S.Input name="inputEmail" value={inputEmail} onChange={change}/>
        <S.EventBox>
          <S.PrevButton onClick={linkLogin}>이전</S.PrevButton>
          <S.NextButton onClick={next}>다음</S.NextButton>
        </S.EventBox>
      </S.PaddingBox>
    </S.FindBox>
  );
};

export default Find;
