import * as S from "./styles";

const Find = () => {


  return (
    <S.FindBox>
      <S.PaddingBox>
        <S.Title>비밀번호 찾기</S.Title>
        <S.GuideWord>이메일</S.GuideWord>
        <S.Input />
        <S.EventBox>
          <S.PrevButton>이전</S.PrevButton>
          <S.NextButton>다음</S.NextButton>
        </S.EventBox>
      </S.PaddingBox>
    </S.FindBox>
  );
};

export default Find;
