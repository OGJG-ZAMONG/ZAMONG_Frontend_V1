import * as S from "./styles";
import React, { Suspense } from "react";
import DiarySign from "../DiarySign/DiarySign";
import { edit, pointer } from "../../../assets/index";
const Calendar = React.lazy(() => import("../Calendar/Calendar"));

const DiaryList = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>나의 꿈 일기</S.Title>
      <S.TodayContainer>
        <Suspense fallback={<div>loading...</div>}>
          <Calendar />
        </Suspense>
        <S.TodayDream>
          <S.TodayDreamText>오늘</S.TodayDreamText>
          <S.DiarySignContainer>
            <DiarySign />
          </S.DiarySignContainer>
        </S.TodayDream>
      </S.TodayContainer>
      <S.DiaryListContainer>
        <S.DiaryListHeader>
          <S.DiaryListTitle>내가 쓴 일기 목록</S.DiaryListTitle>
          <S.HeaderSelections>
            <S.HeaderSelect>
              <input type="checkbox" />
              <label>공유됨</label>
            </S.HeaderSelect>
            <S.HeaderSelect>
              최근순
              <img src={pointer} />
            </S.HeaderSelect>
          </S.HeaderSelections>
        </S.DiaryListHeader>
        <S.DiaryList>
          <S.WriteDiary>
            <S.WriteDiaryText>
              <S.WriteDiaryImg src={edit} />꿈 일기 쓰기
            </S.WriteDiaryText>
          </S.WriteDiary>
          <DiarySign />
        </S.DiaryList>
      </S.DiaryListContainer>
    </S.Container>
  );
};

export default DiaryList;
