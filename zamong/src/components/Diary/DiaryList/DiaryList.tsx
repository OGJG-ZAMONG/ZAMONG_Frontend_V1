import * as S from "./styles";
import { FC, useEffect, useRef, useState } from "react";
import { edit, pointer } from "../../../assets/index";
import Calendar from "../Calendar/Calendar";
import MyDreamDiary from "../../CardDream/MyDreamDiary/MyDreamDiary";

const DiaryList: FC = (): JSX.Element => {
  const [selected, setSelected] = useState<boolean>(false);
  const Pointer = useRef<HTMLImageElement | any>(null);
  const testArray = [];

  for (let i = 0; i < 20; i++) {
    testArray.push(i);
  }

  useEffect(() => {
    if (selected === true) {
      Pointer.current.style.transform = "rotate(0deg)";
    } else if (selected === false) {
      Pointer.current.style.transform = "rotate(180deg)";
    }
  }, [selected]);

  const setClicked = () => {
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  return (
    <S.Container>
      <S.TodayContainer>
        <S.Title>나의 꿈 일기</S.Title>
        <S.TodayBox>
          <Calendar />
          <S.TodayDream>
            <S.TodayDreamText>오늘</S.TodayDreamText>
            <S.DiarySignContainer>
              {testArray.map((value) => {
                return <MyDreamDiary key={value} />;
              })}
            </S.DiarySignContainer>
          </S.TodayDream>
        </S.TodayBox>
      </S.TodayContainer>
      <S.DiaryListContainer>
        <S.DiaryListHeader>
          <S.DiaryListTitle>내가 쓴 일기 목록</S.DiaryListTitle>
          <S.HeaderSelections>
            <>
              <S.Label htmlFor="checkbox">
                <S.Input type="checkbox" id="checkbox" />
                <S.Box />
              </S.Label>
              <label>공유됨</label>
            </>
            <S.HeaderSelect onClick={setClicked}>
              <span>최근순</span>
              <img src={pointer} ref={Pointer} />
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
          {testArray.map((value) => {
            return <MyDreamDiary key={value} />;
          })}
        </S.DiaryList>
      </S.DiaryListContainer>
    </S.Container>
  );
};

export default DiaryList;
