import styled from "@emotion/styled";

export const Container = styled.div`
  width: 630px;
  height: 711px;
  margin: 0 20px;
`;

export const Date = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
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
`;

export const Prev = styled.div`
  width: 32px;
  height: 32px;
  background-color: #2c2c2e;
  border-radius: 5px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
`;

export const DateStatus = styled.div`
  width: 53px;
  height: 32px;
  background-color: #2c2c2e;
  border-radius: 5px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
`;

export const Next = styled.div`
  width: 32px;
  height: 32px;
  background-color: #2c2c2e;
  border-radius: 5px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
`;

export const CalendarContainer = styled.div`
  height: 674px;
  width: 630px;
  display: grid;
  grid-template-columns: repeat(7, 90px);
  border-radius: 10px;
  background-color: #2c2c2e;
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
    color: #ff453a;
  }
`;

export const Days = styled.div`
  width: 90px;
  height: 95px;
  border-top: 1px solid #8e8e93;
  padding-top: 10px;
  &:nth-child(7n + 1) {
    color: #FF453A;
  }
`;
