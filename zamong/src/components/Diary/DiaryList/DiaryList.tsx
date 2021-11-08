import * as S from "./styles";
import { FC, useEffect, useRef, useState } from "react";
import { edit } from "../../../assets/index";
import Calendar from "../Calendar/Calendar";
import MyDreamDiary from "../../CardDream/MyDreamDiary/MyDreamDiary";
import {
  getMyDreamData,
  getDreamsWrittenToday,
} from "../../../utils/api/Diary/MyDreams";

const DiaryList: FC = (): JSX.Element => {
  const [diaryWritten, setDiaryWritten] = useState<Array<object>>([]);
  const [diaryWrittenToday, setDiaryWrittenToday] = useState<Array<object>>([]);
  const [FilterStatus, setFilterStatus] = useState<string>("created");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const FilterStatusRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    getMyDreamData(window.localStorage.getItem("access_token"), FilterStatus)
      .then((res) => {
        setDiaryWritten(res.data.content.response.share_dreams);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [FilterStatus, isChecked]);

  useEffect(() => {
    getDreamsWrittenToday(window.localStorage.getItem("access_token"))
      .then((res) => {
        setDiaryWrittenToday(res.data.content.response.share_dreams);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };
  return (
    <S.Container>
      {/* 오늘 꾼 꿈 목록과 달력 컨테이너 */}
      <S.TodayContainer>
        <S.Title>나의 꿈 일기</S.Title>
        <S.TodayBox>
          {/* 여기 달력 */}
          <Calendar />
          <S.TodayDream>
            <S.TodayDreamText>오늘의 꿈</S.TodayDreamText>
            <S.DiarySignContainer>
              <S.MyDreamDiaryContainer>
                <S.WriteDiary to="/diary/write">
                  <S.WriteDiaryText>
                    <S.WriteDiaryImg src={edit} />
                    <div>꿈 일기 쓰기</div>
                  </S.WriteDiaryText>
                </S.WriteDiary>
              </S.MyDreamDiaryContainer>
              {/* 여기서 맵 돌림 */}
              {diaryWrittenToday.map((value: any, index: number) => {
                return (
                  <S.MyDreamDiaryContainer>
                    <MyDreamDiary
                      img={value.default_posting_image}
                      locked={value.is_shared}
                      title={value.title}
                      date={value.created_at}
                      uuid={value.uuid}
                      key={index}
                    />
                  </S.MyDreamDiaryContainer>
                );
              })}
            </S.DiarySignContainer>
          </S.TodayDream>
        </S.TodayBox>
      </S.TodayContainer>
      {/* 내가 쓴 일기 목록 컨테이너 */}
      <S.DiaryListContainer>
        <S.DiaryListHeader>
          <S.DiaryListTitle>내가 쓴 일기 목록</S.DiaryListTitle>
          <S.HeaderSelections>
            <S.Label>
              <input type="checkbox" onChange={handleCheckboxChange} />
              <span>공유됨</span>
            </S.Label>

            <S.HeaderSelect
              ref={FilterStatusRef}
              onChange={(e) =>
                setFilterStatus(
                  e.target.selectedIndex === 0 ? "created" : "lucy"
                )
              }
            >
              <option value="최근순">최근순</option>
              <option value="인기순">인기순</option>
            </S.HeaderSelect>
          </S.HeaderSelections>
        </S.DiaryListHeader>
        <S.DiaryList>
          {/* 꿈 작성하기 버튼 */}
          {/* <S.WriteDiary to="/diary/write">
            <S.WriteDiaryText>
              <S.WriteDiaryImg src={edit} />
              <div>꿈 일기 쓰기</div>
            </S.WriteDiaryText>
          </S.WriteDiary> */}
          {/* 여기서 맵 돌리기 처리 */}

          {isChecked
            ? diaryWritten
                .filter((value: any) => value.is_shared)
                .map((value: any, index: number) => {
                  return (
                    <MyDreamDiary
                      img={value.default_posting_image}
                      locked={value.is_shared}
                      title={value.title}
                      date={value.created_at}
                      uuid={value.uuid}
                      key={index}
                    />
                  );
                })
            : diaryWritten.map((value: any, index: number) => {
                return (
                  <MyDreamDiary
                    img={value.default_posting_image}
                    locked={value.is_shared}
                    title={value.title}
                    date={value.created_at}
                    uuid={value.uuid}
                    key={index}
                  />
                );
              })}
        </S.DiaryList>
      </S.DiaryListContainer>
    </S.Container>
  );
};

export default DiaryList;
