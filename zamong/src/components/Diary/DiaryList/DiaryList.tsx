import * as S from "./styles";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { edit } from "../../../assets/index";
import Calendar from "../Calendar/Calendar";
import MyDreamDiary from "../../CardDream/MyDreamDiary/MyDreamDiary";
import { getMyDreamData, getDreamsWrittenToday } from "../../../utils/api/Diary/MyDreams";

const DiaryList: FC = (): JSX.Element => {
  const [diaryWritten, setDiaryWritten] = useState<Array<object>>([]);
  const [diaryWrittenToday, setDiaryWrittenToday] = useState<Array<object>>([]);
  const [FilterStatus, setFilterStatus] = useState<string>("created");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(0);
  const FilterStatusRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    setDiaryWritten([]);
    setPage(0);
    getMyDreamData(FilterStatus, 0, isChecked)
      .then((res) => {
        setDiaryWritten(res.data.content.response.share_dreams);
        setMaxPage(res.data.content.response.total_page - 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [FilterStatus, isChecked]);

  useEffect(() => {
    setPage(0);
  }, [isChecked]);

  useEffect(() => {
    getDreamsWrittenToday()
      .then((res) => {
        setDiaryWrittenToday(res.data.content.response.share_dreams);
      })
      .catch((err) => {
        console.log(err);
      });

    window.addEventListener("scroll", onScroll);

    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    getMyDreamData(FilterStatus, page, isChecked)
      .then((res) => {
        setDiaryWritten([...diaryWritten, ...res.data.content.response.share_dreams]);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const RenderDiaryWrittenToday = useMemo(
    () =>
      diaryWrittenToday.map((value: any, index: number) => {
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
      }),
    [diaryWrittenToday]
  );

  const RenderDiaryWritten = useMemo(
    () =>
      diaryWritten.map((value: any, index: number) => {
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
      }),
    [diaryWritten]
  );

  const onScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      if (page === maxPage) {
        return;
      } else {
        setPage(page + 1);
      }
    }
  };

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              {RenderDiaryWrittenToday}
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
              <input type="checkbox" onChange={handleCheckBox} />
              <span>공유됨</span>
            </S.Label>
            <S.HeaderSelect
              ref={FilterStatusRef}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFilterStatus(e.target.selectedIndex === 0 ? "created" : "lucy")
              }
            >
              <option value="최근순">최근순</option>
              <option value="인기순">인기순</option>
            </S.HeaderSelect>
          </S.HeaderSelections>
        </S.DiaryListHeader>
        <S.DiaryList>{RenderDiaryWritten}</S.DiaryList>
      </S.DiaryListContainer>
    </S.Container>
  );
};

export default DiaryList;
