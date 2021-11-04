import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";

export const Container = styled.div`
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
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  &:nth-child(7n + 1) {
    color: ${color.red};
  }
  span {
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    height: 23px;
    width: 23px;
    margin: 3px auto;
  }
  div {
    width: 80%;
    min-width: 80%;
    height: 18px;
    font-size: 14px;
    color: ${color.white};
    background-color: ${color.darkGray};
    border-radius: 5px;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    overflow: hidden;
    padding: 1px 4px;
    margin: 2.5px auto;
    margin-left: 10%; 
    &:hover {
      width: auto;
      overflow: unset;
      box-shadow: 0px 0px 8px ${color.black}80;
    }
  }
`;
