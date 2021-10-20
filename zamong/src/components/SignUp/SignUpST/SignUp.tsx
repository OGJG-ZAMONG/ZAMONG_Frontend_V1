import { useEffect, useState } from "react";
import * as S from "./styles";

type FunctionType = {
  change: (e: React.FormEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onPrev: () => void;
};

type PropsType = {
  functions: FunctionType;
  id: string;
  name: string;
};

const SignUpST = ({ functions, id, name }: PropsType): JSX.Element => {
  const { change, onNext, onPrev } = functions;

  useEffect(() => {
    idCheck(id);
  }, [id]);

  useEffect(() => {
    nameCheck(name);
  }, [name]);

  const idNull = (id: string) => {
    if (id.length === 0) {
      setIdErrorText("아이디를 입력하셔야 합니다.");
      setIdTrue(false);
    } else {
      setIdTrue(true);
    }
  };

  const nameNull = (name: string) => {
    if (name.length === 0) {
      setNameErrorText("이름을 입력하셔야 합니다.");
      setNameTrue(false);
    } else {
      setNameTrue(true);
    }
  };

  const idCheck = (id: string) => {
    const idTest = /\s/;
    if (idTest.test(id) === true) {
      setIdErrorText("아이디에는 공백이 들어갈 수 없습니다.");
      setIdTrue(false);
    } else if (id.length === 0) {
      setIdErrorText("");
      setIdTrue(false);
    } else if (id.length < 6 && id.length > 0) {
      setIdErrorText("아이디는 최소 6글자 이상이어야 합니다.");
      setIdTrue(false);
    } else if (id.length > 16) {
      setIdErrorText("아이디는 최대 16글자 이하여야 합니다.");
      setIdTrue(false);
    } else {
      setIdErrorText("");
      setIdTrue(true);
    }
  };

  const nameCheck = (name: string) => {
    const nameTest = /^\s|\s$/;
    if (nameTest.test(name) === true) {
      setNameErrorText("이름의 처음과 끝에는 공백이 들어갈 수 없습니다.");
      setNameTrue(false);
    } else if (name.length === 0) {
      setNameErrorText("");
      setNameTrue(false);
    } else if (name.length > 20) {
      setNameErrorText("이름은 최대 20글자 이하이어야 합니다.");
    } else {
      setNameErrorText("");
      setNameTrue(true);
    }
  };

  const [idTrue, setIdTrue] = useState(false);
  const [nameTrue, setNameTrue] = useState(false);
  const [nameErrorText, setNameErrorText] = useState("");
  const [idErrorText, setIdErrorText] = useState("");

  const onNextHandler = () => {
    idNull(id);
    nameNull(name);
    if (idTrue && nameTrue) {
      onNext();
    }
  };

  return (
    <S.SignupBox>
      <S.Title>회원가입</S.Title>
      <S.GuideContaier>
        <S.GuideWord>아이디</S.GuideWord>
        <S.ErrorMessage>{idErrorText}</S.ErrorMessage>
      </S.GuideContaier>
      <S.IdInput name="id" value={id} onChange={change} autoComplete="off" />
      <S.GuideContaier>
        <S.GuideWord>이름</S.GuideWord>
        <S.ErrorMessage>{nameErrorText}</S.ErrorMessage>
      </S.GuideContaier>
      <S.Input name="name" value={name} onChange={change} autoComplete="off" />
      <S.EventBox>
        <S.PrevButton onClick={onPrev}>이전</S.PrevButton>
        <S.NextButton onClick={onNextHandler}>다음</S.NextButton>
      </S.EventBox>
    </S.SignupBox>
  );
};

export default SignUpST;
