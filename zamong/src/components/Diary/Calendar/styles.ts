import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";

export const Container = styled.div`
  width: 630px;
  height: 711px;
  margin-right: 20px;
`;

export const Date = styled.div`
  line-height: 25px;
  font: ${font.body1};
  font-weight: 500;
`;

export const CalendarHeader = styled.div`
  height: 33px;
  width: 100%;
  display: flex;
  margin-bottom: 4px;
  justify-content: space-between;
`;

export const Controller = styled.div`
  display: flex;
  justify-content: space-between;
  width: 133px;
  height: 32px;
  font: ${font.body1};
  font-weight: 500;
`;

export const Prev = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${color.darkerGray};
  border-radius: 5px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
`;

export const DateStatus = styled.div`
  width: 53px;
  height: 32px;
  background-color: ${color.darkerGray};
  border-radius: 5px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
`;

export const Next = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${color.darkerGray};
  border-radius: 5px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
`;

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 90px);
  border-radius: 10px;
  background-color: ${color.darkerGray};
  font: ${font.body2};
`;

export const DayContainer = styled.div`
  display: inherit;
  grid-template-columns: repeat(7, 90px);
  text-align: center;

`;

export const WeekDays = styled.div`
  width: 90px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  &:first-child {
    color: ${color.red};
  }
`;

export const Days = styled.div`
  width: 90px;
  height: 105px;
  border-top: 1px solid ${color.gray};
  position: relative;
  /* padding-top: 10px; */
  &:nth-child(7n + 1) {
    color: ${color.red};
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    margin: 5px auto;
  }

  div {
    position: absolute;
    /* display: inline; */
    min-width: 80%;
    height: 20px;
    font-size: 14px;
    color: ${color.white};
    background-color: ${color.darkGray};
    cursor: pointer;
    &:hover {

      transition: 0.5s;
    }
  }
`;
