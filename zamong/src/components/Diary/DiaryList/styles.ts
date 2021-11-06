import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";
import { Checked } from "../../../assets";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${color.black};
  width: 100%;
  display: inline;
`;

export const TodayContainer = styled.div`
  width: 1280px;
  height: 100vh;
  display: flex;
  color: ${color.white};
  flex-direction: column;
  justify-content: center;
  min-height: 711px;
  margin: 0 auto;
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
  height: 710px;
  width: 100%;
  display: flex;
  justify-content: center;
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
  grid-gap: 15px;
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 15px;
  /* height: auto; */
  margin-bottom: 500px;
`;

export const WriteDiary = styled(Link)`
  aspect-ratio: 3/2;
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: 3/2;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(20px);
  background-color: ${color.darkerGray};
  text-decoration: none;
  &:hover {
    margin-top: 3px;
    transition: all 0.3s ease-out;
  }
`;

export const WriteDiaryText = styled.div`
  margin: 89px 86px;
  font-family: Spoqa Han Sans Neo;
  font-weight: 500;
  font-size: 20px;
  color: ${color.lightGray};
  display: flex;
  justify-content: center;
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
  outline: none;
  text-decoration: none;
  border: none;
  background-color: inherit;
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
`