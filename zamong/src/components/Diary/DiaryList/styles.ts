import styled from "@emotion/styled";
import { font } from "../../../style/font";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  display: inline;
`;

export const TodayContainer = styled.div`
  width: 1280px;
  height: 100vh;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  min-height: 711px;
  margin: 0 auto;
  min-height: 711px;
`;

export const Title = styled.div`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  font: ${font.headline1};
`;

export const TodayDream = styled.div`
  height: 711px;
  width: 650px;
  background-color: #2c2c2e;
  border-radius: 10px;
  padding: 0 10px;
`;

export const TodayBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TodayDreamText = styled.div`
  width: 37px;
  height: 25px;
  color: white;
  margin: 20px 0 4px 0;
  font: ${font.subtitle};
  font-weight: 500;
  line-height: 10px;
`;

export const DiarySignContainer = styled.div`
  height: 93%;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 40%;
  grid-gap: 15px;
`;

export const DiaryListContainer = styled.div`
  height: 100vh;
  width: 1280px;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const DiaryListTitle = styled.div`
  height: 30px;
  font: ${font.headline3};
`;

export const DiaryListHeader = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 3%;
`;

export const DiaryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;
  height: 1120px;
  overflow: auto;
`;

export const WriteDiary = styled.div`
  aspect-ratio: 3/2; 
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: 3/2;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(20px);
  background-color: #2c2c2e;
`;

export const WriteDiaryText = styled.div`
  margin: 89px 86px;
  font-family: Spoqa Han Sans Neo;
  font-weight: 500;
  font-size: 20px;
  color: #c7c7cc;
  display: flex;
  justify-content: center;
`;

export const WriteDiaryImg = styled.img`
  margin-right: 10px;
`;

export const HeaderSelections = styled.div`
  height: 24px;
  display: flex;
  font: ${font.body2};
  font-weight: 400px;
`;

export const HeaderSelect = styled.div`
  height: 100%;
  margin-left: 25px;
  display: flex;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-top: 3px;
    margin-left: 4px;
    transition: 0.2s;
  }
`;

export const Label = styled.label`
    width: 20px;
    height: 20px;
    position: relative;
    margin-right: 9px;
`;

export const Box = styled.div`
    width: 100%;
    height: 100%;
    background-color: #636366;
    border-radius: 5px;
    cursor: pointer;

`;

export const Input = styled.input`
    width: 24px;
    height: 24px;
    display: none;
    border-radius: 5px;
    &:checked ~ div::after{
        content: '✓';
        color: black;
        position: absolute;
        left: 4px;
        color: white;
    }
`;
