import * as S from "./styles";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { edit } from "../../../assets/index";
import Calendar from "../Calendar/Calendar";
import MyDreamDiary from "../../CardDream/MyDreamDiary/MyDreamDiary";
import {
  getMyDreamData,
  getDreamsWrittenToday,
} from "../../../utils/api/Diary/MyDreams";
import CardSkeleton from "../../CardSkeleton/CardSkeleton";

const DiaryList: FC = (): JSX.Element => {
  const [diaryWritten, setDiaryWritten] = useState<Array<object> | null>(null);
  const NNdiaryWritten = diaryWritten || [];
  const [diaryWrittenToday, setDiaryWrittenToday] = useState<Array<object> | null>(null);
  const NNdiaryWrittenToday = diaryWrittenToday || [];
  const [FilterStatus, setFilterStatus] = useState<string>("created");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(0);
  const FilterStatusRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    setDiaryWritten(null);
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
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    getDreamsWrittenToday()
      .then((res) => {
        setDiaryWrittenToday(res.data.content.response.share_dreams);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [maxPage, page]);

  useEffect(() => {
    getMyDreamData(FilterStatus, page, isChecked)
      .then((res) => {
        if (diaryWritten === null) return;
        setDiaryWritten([
          ...diaryWritten,
          ...res.data.content.response.share_dreams,
        ]);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const RenderDiaryWrittenToday = NNdiaryWrittenToday.map(
    (value: any, index: number) => {
      return (
        <S.MyDreamDiaryContainer key={index}>
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
    }
  );

  const RenderDiaryWritten = NNdiaryWritten.map((value: any, index: number) => {
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
  });

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

  const RenderSkeleton = (length: number) => {
    return Array(length)
      .fill(0)
      .map((_, index) => {
        return <CardSkeleton key={index} />;
      });
  };

  return (
    <S.Container>
      {/* ?????? ??? ??? ????????? ?????? ???????????? */}
      <S.TodayContainer>
        <S.Title>?????? ??? ??????</S.Title>
        <S.TodayBox>
          {/* ?????? ?????? */}
          <Calendar />
          <S.TodayDream>
            <S.TodayDreamText>????????? ???</S.TodayDreamText>
            <S.DiarySignContainer>
              <S.SignInner>
                <S.MyDreamDiaryContainer>
                  <S.WriteDiary to="/diary/write">
                    <S.WriteDiaryText>
                      <img src={edit} />
                      <div>??? ?????? ??????</div>
                    </S.WriteDiaryText>
                  </S.WriteDiary>
                </S.MyDreamDiaryContainer>
                {/* ????????? ??? ?????? */}
                {diaryWrittenToday ? RenderDiaryWrittenToday : RenderSkeleton(3)}
              </S.SignInner>
            </S.DiarySignContainer>
          </S.TodayDream>
        </S.TodayBox>
      </S.TodayContainer>
      {/* ?????? ??? ?????? ?????? ???????????? */}
      <S.DiaryListContainer>
        <S.DiaryListHeader>
          <S.DiaryListTitle>?????? ??? ?????? ??????</S.DiaryListTitle>
          <S.HeaderSelections>
            <S.Label>
              <input type="checkbox" onChange={handleCheckBox} />
              <span>?????????</span>
            </S.Label>
            <S.HeaderSelect
              ref={FilterStatusRef}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFilterStatus(
                  e.target.selectedIndex === 0 ? "created" : "lucy"
                )
              }
            >
              <option value="?????????">?????????</option>
              <option value="?????????">?????????</option>
            </S.HeaderSelect>
          </S.HeaderSelections>
        </S.DiaryListHeader>
        <S.DiaryList>
          {diaryWritten ? RenderDiaryWritten : RenderSkeleton(12)}
        </S.DiaryList>
      </S.DiaryListContainer>
    </S.Container>
  );
};

export default DiaryList;
