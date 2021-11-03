import * as S from "./styles";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { getCalendarData } from "../../../utils/api/calendar";
import { color } from "../../../style/color";
const Calendar: FC = (): JSX.Element => {
  const date: Date = new Date();
  const DayContainer: MutableRefObject<any> = useRef();
  const week: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];
  const Today: string = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`;
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    for (let i = 0; i < 41; i++) {
      if (DayContainer.current.childNodes[i].children.length >= 1) {
        DayContainer.current.childNodes[i].firstChild.remove();
      }
    }
    makeCalendar(year, month);
    getCalendarData(
      window.localStorage.getItem("access_token"),
      year,
      month + 1
    )
      .then((res) => setData(res.data.content.response.timetables))
      .catch((err) => console.log(err));

  }, [month]);

  useEffect(() => {
    if (data.length === 0) {
      return;
    } else {
      data.map((i: any) => {
        const div = document.createElement("div");
        div.innerHTML = i.title;
        const Date = i.date.split("-")[2];
        const DateIndex =
          Number(Date.split("")[0]) * 10 + Number(Date.split("")[1]);
        DayContainer.current.childNodes[DateIndex].insertBefore(div, null);
      });
    }
    //제목 삭제 알고리즘
    // for (let i = 0; i < 41; i++) {
    //   let Length = DayContainer.current.childNodes[i].children.length;

    //   if (Length >= 2) {
    //     for (let j = 0; j < Length; j++) {
    //       DayContainer.current.childNodes[i].lastChild.remove();
    //     }
    //   }
    // }
  }, [data]);

  const makeCalendar = (year: number, month: number) => {
    const dateLength: number = new Date(year, month + 1, 0).getDate();
    const newDate: number = new Date(year, month).getDay();

    for (let i = newDate; i < dateLength + newDate; i++) {
      const div = document.createElement("div");
      div.setAttribute("key", `${year}-${month}-${i}`);
      div.innerHTML = `${i - (newDate - 1)}`;
      if (`${year} ${month} ${div.innerHTML}` === Today) {
        div.style.backgroundColor = `${color.blue}`;
        // div.style.display = "inline";
        // div.style.width = "20px";
        // div.style.height = "20px";
        div.style.borderRadius = "100%";
        div.style.color = "white";
      }
      DayContainer.current.childNodes[i].insertBefore(div, null);
    }
  };

  const renderDay = () => {
    //달력 칸 42개 렌더링하기
    const dayArray: Array<any> = [];
    for (let i = 1; i <= 42; i++) {
      dayArray.push(<S.Days key={i} />);
    }
    return dayArray;
  };

  const nextMonth = () => {
    setMonth(month + 1);
    if (month >= 11) {
      setMonth(0);
      setYear(year + 1);
    }
  };

  const todayDate = () => {
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  };

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
        {week.map((week: any, index: number) => {
          return <S.WeekDays key={index}>{week}</S.WeekDays>;
        })}
        <S.DayContainer ref={DayContainer}>{renderDay()}</S.DayContainer>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default Calendar;
