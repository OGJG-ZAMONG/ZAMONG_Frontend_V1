import * as S from "./styles";

const Change = () => {

  return (
    <S.ChangeBox>
      <S.PaddingBox>
        <S.Title>비밀번호 변경</S.Title>
        <S.GuideContaier>
          <S.GuideWord>비밀번호</S.GuideWord>
          <S.ErrorMessage></S.ErrorMessage>
        </S.GuideContaier>
        <S.Input />
        <S.GuideContaier>
          <S.GuideWord>비밀번호 확인</S.GuideWord>
          <S.ErrorMessage></S.ErrorMessage>
        </S.GuideContaier>
        <S.Input />
        <S.EventBox>
          <S.PrevButton>이전</S.PrevButton>
          <S.NextButton>변경</S.NextButton>
        </S.EventBox>
      </S.PaddingBox>
    </S.ChangeBox>
  );
};

export default Change;
