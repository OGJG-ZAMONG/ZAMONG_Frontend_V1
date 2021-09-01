import * as S from "./styles";
import Calendar from "../Calendar/Calandar";
import DiarySign from "../DiarySign/DiarySign";

const DiaryList = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>나의 꿈 일기</S.Title>
      <S.TodayContainer>
        <Calendar />
        <S.TodayDream>
          <S.TodayDreamText>오늘</S.TodayDreamText>
          <S.DiarySignContainer>
          <DiarySign />
          <DiarySign />
          <DiarySign />
          <DiarySign />
          <DiarySign />
          <DiarySign />
          </S.DiarySignContainer>
        </S.TodayDream>
      </S.TodayContainer>

    </S.Container>
  );
};

export default DiaryList;
