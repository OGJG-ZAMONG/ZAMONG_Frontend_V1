import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";

export const Container = styled.div`
  height: 100%;
`;

export const Date = styled.div`
  line-height: 25px;
  font: ${font.body1};
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
  width: 21%;
  height: 100%;
  font: ${font.body1};
  font-weight: 500;
`;

export const Prev = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${color.darkerGray};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateStatus = styled.div`
  width: 55px;
  background-color: ${color.darkerGray};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Next = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${color.darkerGray};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  border-radius: 10px;
  background-color: ${color.darkerGray};
  font: ${font.body2};
`;

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  text-align: center;
`;

export const WeekDays = styled.div`
  padding: 8px 0;
  text-align: center;
  &:first-child {
    color: ${color.red};
  }
`;

export const Days = styled.div`
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
    width: 20px;
    height: 20px;
    padding: 2px;
    margin: 2px auto;
  }
  div {
    width: 80%;
    min-width: 80%;
    color: ${color.white};
    background-color: ${color.darkGray};
    border-radius: 3px;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    overflow: hidden;
    padding: 0 4px;
    margin: auto;
    margin-left: 10%;
    font-size: 15px;
    &:hover {
      width: auto;
      z-index: 2;
      overflow: unset;
      box-shadow: 0px 0px 8px ${color.black}80;
    }
  }
`;
