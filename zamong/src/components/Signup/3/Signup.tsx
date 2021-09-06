import * as S from "./style";
import { MutableRefObject, useRef } from "react"

const Signup3 = (): JSX.Element => {
  const inputRefs: MutableRefObject<any> = useRef([]);
  const numberBox = ["0", "1", "2", "3", "4", "5"];

  const onChange = (e: any, index: number) => {
    if (e.target.value.length >= e.target.maxLength) {
      inputRefs.current[index + 1]?.focus();
      console.log(index + 1);
    }
  };

  const numberBoxList = numberBox.map((_, index) => (
    <S.NumberBox
      maxLength={1}
      ref={(elem) => (inputRefs.current[index] = elem)}
      onChange={(e) => onChange(e, index)}
    />
  ));

  return (
    <S.SignupBox>
      <S.Title>회원가입</S.Title>
      <S.GuideWord>이메일 인증</S.GuideWord>
      <S.NumberContainer>{numberBoxList}</S.NumberContainer>
      <S.EventBox>
        <S.PrevButton>이전</S.PrevButton>
        <S.NextButton>다음</S.NextButton>
      </S.EventBox>
    </S.SignupBox>
  );
};

export default Signup3;
