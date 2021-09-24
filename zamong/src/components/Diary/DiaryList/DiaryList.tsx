import * as S from "./styles";
import { FC } from "react";
import { edit, pointer } from "../../../assets/index";
import Calendar from "../Calendar/Calendar";
import MyDreamDiary from "../../CardDream/MyDreamDiary/MyDreamDiary";

const DiaryList: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.TodayContainer>
        <S.Title>나의 꿈 일기</S.Title>
        <S.TodayBox>
          <Calendar />
          <S.TodayDream>
            <S.TodayDreamText>오늘</S.TodayDreamText>
            <S.DiarySignContainer>
              <MyDreamDiary />
            </S.DiarySignContainer>
          </S.TodayDream>
        </S.TodayBox>
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
              <S.WriteDiaryImg src={edit} />
              <div>꿈 일기 쓰기</div>
            </S.WriteDiaryText>
          </S.WriteDiary>
          <MyDreamDiary />
        </S.DiaryList>
      </S.DiaryListContainer>
    </S.Container>
  );
};

export default DiaryList;
