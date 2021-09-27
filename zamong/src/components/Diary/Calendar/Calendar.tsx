import * as S from "./styles";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
const Calendar: FC = (): JSX.Element => {
  const date: Date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const DayContainer: MutableRefObject<any> = useRef();
  const week: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];
  const Today: string = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`;

  useEffect(() => {
    for (let i = 0; i < 41; i++) {
      if (DayContainer.current.childNodes[i].children.length >= 1) {
        DayContainer.current.childNodes[i].firstChild.remove();
      }
    }
    makeCalendar(year, month);
  }, [month]);

  const makeCalendar = (year: number, month: number) => {
    const dateLength: number = new Date(year, month + 1, 0).getDate();
    const newDate: number = new Date(year, month).getDay();

    for (let i = newDate; i < dateLength + newDate; i++) {
      const div = document.createElement("div");
      div.innerHTML = `${i - (newDate - 1)}`;
      if (`${year} ${month} ${div.innerHTML}` === Today) {
        div.style.backgroundColor = "#0A84FF";
        div.style.display = "inline";
        div.style.padding = "4px 4px";
        div.style.borderRadius = "100%";
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
