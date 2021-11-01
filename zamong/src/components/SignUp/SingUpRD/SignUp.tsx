import * as S from "./styles";
import { MutableRefObject, useRef } from "react";

type FunctionType = {
  onPrev: () => void;
  onRequest: () => void;
};

type PropsType = {
  functions: FunctionType;
  authEntication: Array<string>;
};

const SignUpRD = ({ functions, authEntication }: PropsType): JSX.Element => {
  const inputRefs: MutableRefObject<any> = useRef([]);
  const { onPrev, onRequest } = functions;

  const onChange = (e: any, index: number) => {
    if (e.target.value.length >= e.target.maxLength) {
      inputRefs.current[index + 1]?.focus();
      authEntication[index] = e.target.value;
    }
  };

  const onDeleteUp = (e: any, index: number) => {
    if (e.which === 8) {
      if (e.target.value.length === 0) {
        if (index) {
          inputRefs.current[index - 1]?.focus();
          authEntication[index - 1] = "";
        }
      } else {
        authEntication[index] = "";
      }
    }
  };

  const numberBoxList = authEntication.map((_, index) => (
    <S.NumberBox
      key={index}
      maxLength={1}
      ref={(elem) => (inputRefs.current[index] = elem)}
      onChange={(e) => onChange(e, index)}
      onKeyDown={(e) => onDeleteUp(e, index)}
      autoComplete="off"
    />
  ));

  return (
    <S.SignupBox>
      <S.PaddingBox>
        <S.Title>회원가입</S.Title>
        <S.GuideWord>이메일 인증</S.GuideWord>
        <S.NumberContainer>{numberBoxList}</S.NumberContainer>
        <S.EventBox>
          <S.PrevButton onClick={onPrev}>이전</S.PrevButton>
          <S.NextButton onClick={onRequest}>다음</S.NextButton>
        </S.EventBox>
      </S.PaddingBox>
    </S.SignupBox>
  );
};

export default SignUpRD;
