import * as S from "./styles";
import { MutableRefObject, useEffect, useRef } from "react";

const Calendar = (): JSX.Element => {
  const DayContainer: MutableRefObject<any> = useRef();
  const week: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date();
  const day: number = date.getDate();

  const renderDay = () => {
    const dayArray: Array<any> = [];

    for (let i = 1; i <= 42; i++) {
      dayArray.push(<S.Days key={i} id="days" />);
    }

    return dayArray;
  };

  useEffect(() => { //달력 생성
    for (let i = day; i < 31 + day; i++) {
      const div = document.createElement("div");
      div.innerHTML = `${i - (day - 1)}`;
      if (div.innerHTML === day.toString()) {
        div.style.backgroundColor = "#0A84FF";
        div.style.display = "inline";
        div.style.padding = "3px 8px";
        div.style.borderRadius = "100%";
      }
      DayContainer.current.childNodes[i].insertBefore(div, null);
    }
  }, []);

  return (
    <S.Container>
      <S.CalendarHeader>
        <S.Date>2011년 9월 3일</S.Date>
        <S.Controller>
          <S.Prev>{"<"}</S.Prev>
          <S.DateStatus>오늘</S.DateStatus>
          <S.Next>{">"}</S.Next>
        </S.Controller>
      </S.CalendarHeader>
      <S.CalendarContainer>
        {week.map((week, index) => {
          return <S.WeekDays key={index}>{week}</S.WeekDays>;
        })}
        <S.DayContainer ref={DayContainer} id="DayContainerId">
          {renderDay()}
        </S.DayContainer>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default Calendar;
