import * as S from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const Calendar = (): JSX.Element => {
  const date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [monthName, setMonthName] = useState<any>(() => {
    switch (month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        break;
    }
  });
  const DayContainer: MutableRefObject<any> = useRef();
  const week: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];
  const Today = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`;

  useEffect(() => {
    for (let i = 0; i < 41; i++) {
      if (DayContainer.current.childNodes[i].children.length >= 1) {
        DayContainer.current.childNodes[i].firstChild.remove();
      }
    }
    makeCalendar(year, month);
  }, [month]);

  const makeCalendar = (year: any, month: any) => {
    setMonthName(parseMonth());

    const dateLength = new Date(year, month + 1, 0).getDate();
    const newDate: any = new Date(year, month).getDay();

    for (let i = newDate; i < dateLength + newDate; i++) {
      const div = document.createElement("div");
      div.innerHTML = `${i - (newDate - 1)}`;
      if (`${year} ${month} ${div.innerHTML}` === Today) {
        div.style.backgroundColor = "#0A84FF";
        div.style.display = "inline";
        div.style.padding = "3px 8px";
        div.style.borderRadius = "100%";
      }
      DayContainer.current.childNodes[i].insertBefore(div, null);
    }
  };

  const parseMonth = () => {
    switch (month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        break;
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
    setMonthName(parseMonth());
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
        {week.map((week, index) => {
          return <S.WeekDays key={index}>{week}</S.WeekDays>;
        })}
        <S.DayContainer ref={DayContainer}>{renderDay()}</S.DayContainer>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default Calendar;
