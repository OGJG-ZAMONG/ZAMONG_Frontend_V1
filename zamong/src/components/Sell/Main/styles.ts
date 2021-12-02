import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 1280px;
  padding: 120px 0 12% 0;
  margin: 0 auto;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.white};
  height: 40px;
  margin-bottom: 56px;
`;

export const SellDreamText = styled.div`
  font: ${font.headline1};
`;

export const SellManagementText = styled.div`
  font: ${font.subtitle};
  cursor: pointer;
`;

export const LinkBox = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

export const SellingDreamListText = styled.div`
  font: ${font.headline3};
  font-size: 24px;
  color: ${color.white};
  margin-bottom: 28px;
`;

export const SellingDreamListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  margin-bottom: 56px;
`;

export const PageNationContainer = styled.div`
  width: 35%;
  height: 25px;
  display: flex;
  justify-content: space-evenly;
  color: ${color.gray};
  margin: 0 auto;
  font: ${font.subtitle};
`;

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 60%;
`;

export const Prev = styled.div`
  cursor: pointer;
`;

export const Next = styled.div`
  cursor: pointer;
`;

export const Page = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
