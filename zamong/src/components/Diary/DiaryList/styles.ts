import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  display: inline-block;
`;

export const TodayContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
`;

export const Title = styled.div`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  width: 162px;
  height: 40px;
  margin: 120px 0 48px 14%;
`;

export const TodayDream = styled.div`
  height: 711px;
  width: 650px;
  background-color: #2c2c2e;
  border-radius: 10px;
  display: inline-block;
`;

export const TodayDreamText = styled.div`
  width: 37px;
  height: 25px;
  color: white;
  font-weight: 500;
  margin: 16px 0 0 28px;
  font-size: 20px;
`;

export const DiarySignContainer = styled.div`
  height: 90%;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 48%);
  margin-left: 16px;
`;

export const DiaryListContainer = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
`;

export const DiaryListTitle = styled.div`
  height: 30px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

export const DiaryListHeader = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 250px;
  padding: 50px 0;
`;

export const DiaryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin: 60px 230px;
`;

export const WriteDiary = styled.div`
  width: 305px;
  height: 191px;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(20px);
  background-color: #2c2c2e;
  margin: 16px 8px;
`;

export const WriteDiaryText = styled.div`
  margin: 89px 86px;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #c7c7cc;
`;

export const WriteDiaryImg = styled.img`
  margin-right: 10px;
`;

export const HeaderSelections = styled.div`
  height: 24px;
  display: flex;
`;

export const HeaderSelect = styled.div`
  height: 100%;
  margin-left: 25px;
`;

export const HeaderSelectInput = styled.input`
  &::before {
    background-color: #636366;
    border-radius: 5px;
  }
`;

export const HeaderSelectLabel = styled.label``;
