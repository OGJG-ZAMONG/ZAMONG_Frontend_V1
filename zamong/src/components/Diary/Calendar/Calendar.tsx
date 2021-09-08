import * as S from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const Calendar = (): JSX.Element => {
  const date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [monthName, setMonthName] = useState<any>();
  const [day, setDay] = useState<number>(date.getDay());

  const DayContainer: MutableRefObject<any> = useRef();
  const week: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(()=> {
    const parsedMonth = parseMonth();
    setMonthName(parsedMonth);
    setYear(date.getFullYear());
    setDay(date.getDate());

    const makeCalendar = (
      year: any,
      month: any,
      monthName: any,
      day: number
    ) => {
    console.log(year, month, monthName, day);
      const newDate: any = new Date(year, month).getDay();
      const newDay = new Date(`${parsedMonth} ${day}, ${year}`).getDate();
console.log(newDay)
      for (let i = newDate; i < 31 + newDate; i++) {
        const div = document.createElement("div");
        div.innerHTML = `${i - (newDate - 1)}`;
        if (div.innerHTML === newDay.toString()) {
          div.style.backgroundColor = "#0A84FF";
          div.style.display = "inline";
          div.style.padding = "3px 8px";
          div.style.borderRadius = "100%";
        }
        DayContainer.current.childNodes[i].insertBefore(div, null);
      }
    };
    makeCalendar(year, month, monthName, day);
  }, []);

  const parseMonth = () => {
    switch (month) {
      case 0:
        return "January";
        break;
      case 1:
        return "February";
        break;
      case 2:
        return "March";
        break;
      case 3:
        return "April";
        break;
      case 4:
        return "May";
        break;
      case 5:
        return "June";
        break;
      case 6:
        return "July";
        break;
      case 7:
        return "August";
        break;
      case 8:
        return "September";
        break;
      case 9:
        return "October";
        break;
      case 10:
        return "November";
        break;
      case 11:
        return "December";
        break;
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
    if (month >= 12) {
      setMonth(1);
    }
  };

  return (
    <S.Container>
      <S.CalendarHeader>
        <S.Date>
          {year}년 {month + 1}월
        </S.Date>
        <S.Controller>
          <S.Prev>{"<"}</S.Prev>
          <S.DateStatus>오늘</S.DateStatus>
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
