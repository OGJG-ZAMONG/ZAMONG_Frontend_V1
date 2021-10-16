import styled from "@emotion/styled";
import { font } from "../../../style/font";

export const Contents = styled.div`
  width: 1280px;
  padding-top: 120px;
  margin: 0 auto;
`;

export const SellManagementText = styled.div`
  font: ${font.headline1};
  color: #ffffff;
`;

export const Box = styled.div`
  width: 1280px;
  height: 785px;
  margin-top: 56px;
`;

export const SubTitle = styled.div`
  font: ${font.subtitle};
  color: #ffffff;
`;

export const List = styled.div`
  height: 637px;
  margin-top: 28px;
  margin-bottom: 56px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
`;

export const PageNationContainer = styled.div`
  width: 38%;
  height: 25px;
  display: flex;
  justify-content: space-evenly;
  color: #8e8e93;
  margin: 0 auto;
  font: ${font.subtitle};
`;

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 308px;
  margin: 0 16px;
  align-items: center;
`;

export const Prev = styled.div`
  cursor: pointer;
  width: 52px;
`;

export const Next = styled.div`
  cursor: pointer;
  width: 52px;
`;

export const Page = styled.div`
  cursor: pointer;
`;
