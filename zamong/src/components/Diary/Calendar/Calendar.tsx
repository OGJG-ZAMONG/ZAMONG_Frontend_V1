import * as S from "./styles";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { getCalendarData } from "../../../utils/api/Diary/Calendar";
import { color } from "../../../style/color";
import { useHistory } from "react-router";

const Calendar: FC = (): JSX.Element => {
  const date: Date = new Date();
  const DayContainer: MutableRefObject<any> = useRef<HTMLDivElement>(null);
  const week: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];
  const Today: string = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`;
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [data, setData] = useState<Array<object>>([]);
  const router = useHistory();
  const newDate: number = new Date(year, month).getDay();

  useEffect(() => {
    //달력이 바뀌면 전 요소들 삭제
    for (let i = 0; i < 41; i++) {
      if (DayContainer.current.childNodes[i].children.length >= 1) {
        while (DayContainer.current.childNodes[i].lastElementChild) {
          DayContainer.current.childNodes[i].removeChild(
            DayContainer.current.childNodes[i].lastChild
          );
        }
      }
    }
    makeCalendar(year, month);
    getCalendarData(year, month + 1)
      .then((res) => setData(res.data.content.response.timetables))
      .catch((err) => console.log(err));
  }, [month]);

  useEffect(() => {
    //만약 데이터가 없으면 추가하지않고 있으면 해당 날짜의 위치에 요소를 삽입
    if (data.length === 0) {
      return;
    } else {
      data.map((value: any) => {
        const div = document.createElement("div");
        div.innerHTML = value.title;
        const Date = value.date.split("-")[2];
        const DateIndex =
          Number(Date.split("")[0]) * 10 +
          Number(Date.split("")[1]) +
          (newDate - 1);
        if (DayContainer.current.childNodes[DateIndex].children.length < 4) {
          DayContainer.current.childNodes[DateIndex].insertBefore(div, null);
        }
        div.onclick = () => {
          handleCalendarClick(value.uuid);
        };
      });
    }
  }, [data]);

  //달력을 그리는 함수
  const makeCalendar = (year: number, month: number) => {
    const dateLength: number = new Date(year, month + 1, 0).getDate();

    for (let i = newDate; i < dateLength + newDate; i++) {
      const span = document.createElement("span");
      span.innerHTML = `${i - (newDate - 1)}`;
      if (`${year} ${month} ${span.innerHTML}` === Today) {
        span.style.backgroundColor = `${color.blue}`;
        span.style.borderRadius = "100%";
        span.style.color = "white";
      }
      DayContainer.current.childNodes[i].insertBefore(span, null);
    }
  };

  const handleCalendarClick = (uuid: string) => {
    router.push(`diary/detail/${uuid}`);
  };

  const renderDay = () => {
    //달력 칸 42개 렌더링하기
    const dayArray: Array<any> = [];
    for (let i = 1; i <= 42; i++) {
      dayArray.push(<S.Days key={i} />);
    }
    return dayArray;
  };

  //다음달로 이동하기
  const nextMonth = () => {
    setMonth(month + 1);
    if (month >= 11) {
      setMonth(0);
      setYear(year + 1);
    }
  };

  //현재 달로 이동하기
  const todayDate = () => {
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  };

  //이전 달로 이동하기
  const prevMonth = () => {
    setMonth(month - 1);
    if (month < 1) {
      setMonth(11);
      setYear(year - 1);
    }
  };

  return (
    <S.Container>
      <S.CalendarHeader>
        <S.Date>
          {year}년 {month + 1}월
        </S.Date>
        <S.Controller>
          <S.Prev onClick={prevMonth}>{"<"}</S.Prev>
          <S.DateStatus onClick={todayDate}>오늘</S.DateStatus>
          <S.Next onClick={nextMonth}>{">"}</S.Next>
        </S.Controller>
      </S.CalendarHeader>
      <S.CalendarContainer>
        <S.WeekContainer>
          {week.map((week: any, index: number) => {
            return <S.WeekDays key={index}>{week}</S.WeekDays>;
          })}
        </S.WeekContainer>
        <S.DayContainer ref={DayContainer}>{renderDay()}</S.DayContainer>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default Calendar;
