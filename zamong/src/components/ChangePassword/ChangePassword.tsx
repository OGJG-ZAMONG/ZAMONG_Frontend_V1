import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { postChange } from "../../utils/api/FIndPassword";
import * as S from "./styles";

const ChangePassword = () => {
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");
  const email = query.get("email");
  const { push } = useHistory();
  const [inputs, setInputs] = useState({
    inputPw: "",
    pwErrorText: "",
    pwTrue: false,
    inputPwCheck: "",
    pwCheckErrorText: "",
    pwCheckTrue: false,
  });
  const {
    inputPw,
    pwErrorText,
    inputPwCheck,
    pwCheckErrorText,
    pwTrue,
    pwCheckTrue,
  } = inputs;

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    pwCheck();
  }, [inputPw]);

  useEffect(() => {
    checkPwCheck();
  }, [inputPwCheck]);

  const pwCheck = () => {
    const specialTest = /\W+/;
    const numberTest = /\d+/;
    if (!inputPw.length) {
      setInputs({
        ...inputs,
        pwTrue: false,
      });
    } else if (inputPw.length < 8 && inputPw.length > 0) {
      setInputs({
        ...inputs,
        pwTrue: false,
        pwErrorText: "비밀번호는 최소 8글자 이상이어야 합니다.",
      });
    } else if (inputPw.length > 16) {
      setInputs({
        ...inputs,
        pwTrue: false,
        pwErrorText: "비밀번호는 최대 16글자 이하여야 합니다.",
      });
    } else if (inputPw.length && !numberTest.test(inputPw)) {
      setInputs({
        ...inputs,
        pwTrue: false,
        pwErrorText: "숫자가 최소 1개 이상 포함돼야 합니다.",
      });
    } else if (inputPw.length && !specialTest.test(inputPw)) {
      setInputs({
        ...inputs,
        pwTrue: false,
        pwErrorText: "특수문자가 최소 1개 이상 포함돼야 합니다.",
      });
    } else {
      setInputs({
        ...inputs,
        pwTrue: true,
        pwErrorText: "",
      });
    }
  };

  const checkPwCheck = () => {
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
        pwCheckTrue: true,
        pwCheckErrorText: "",
      });
    }
  };

  const requestChange = async () => {
    if (pwTrue && pwCheckTrue) {
      const data = {
        new_password: inputPw,
        change_password_token: token,
        email: email,
      }

      try {
        if(data.email !== null && data.change_password_token !== null ){
          await postChange(data);
        } else {
          push('/findpassword');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("입력란을 확인해주세요.");
    }
  };

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
          <S.NextButton onClick={requestChange}>변경</S.NextButton>
        </S.EventBox>
      </S.PaddingBox>
    </S.ChangeBox>
  );
};

export default ChangePassword;
