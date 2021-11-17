import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${color.black};
  width: 100%;
`;

export const TodayContainer = styled.div`
  width: 1280px;
  display: flex;
  color: ${color.white};
  flex-direction: column;
  margin: 0 auto;
  padding-top: 7%;
`;

export const Title = styled.div`
  color: ${color.white};
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  font: ${font.headline1};
`;

export const TodayDream = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${color.darkerGray};
  border-radius: 10px;
`;

export const TodayBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
`;

export const TodayDreamText = styled.div`
  width: calc(100% - 20px);
  height: 40px;
  display: flex;
  align-items: center;
  color: ${color.white};
  font: ${font.subtitle};
  border-bottom: 0.5px solid ${color.gray};
  margin: 0 auto;
`;

export const DiarySignContainer = styled.div`
  height: calc(100% - 40px);
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 40%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DiaryListContainer = styled.div`
  width: 1280px;
  color: ${color.white};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 10%;
`;

export const DiaryListTitle = styled.div`
  height: 30px;
  font: ${font.headline3};
`;

export const DiaryListHeader = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const DiaryList = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 15px;
  margin-bottom: 300px;
`;

export const WriteDiary = styled(Link)`
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: 3/2;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid ${color.darkerGray};
  background-color: ${color.gray};
  background: 0 0 0 0.5;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WriteDiaryText = styled.div`
  font: ${font.subtitle};
  color: ${color.lightGray};
  color: ${color.white};
  display: flex;
  justify-content: space-between;
`;

export const WriteDiaryImg = styled.img`
  margin-right: 10px;
`;

export const HeaderSelections = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  font: ${font.body2};
  font-weight: 400px;
`;

export const HeaderSelect = styled.select`
  color: ${color.white};
  font: ${font.body2};
  height: 100%;
  margin-left: 25px;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-color: inherit;
  option {
    background: ${color.black};
  }
`;

export const Label = styled.label`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: ${font.body2};
  cursor: pointer;
  input {
    width: 22px;
    height: 22px;
    margin-right: 8px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.darkGray};
  border-radius: 5px;
  cursor: pointer;
`;

export const Input = styled.input`
  position: relative;
  width: 24px;
  height: 24px;
  display: none;
  border-radius: 5px;
  &:checked ~ div::after {
    content: "";
    position: absolute;
    color: ${color.white};
  }
`;

export const MyDreamDiaryContainer = styled.div`
  padding: 15px 10px;
`;
