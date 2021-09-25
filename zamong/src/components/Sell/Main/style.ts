import styled from "@emotion/styled";
import { font } from "../../../style/font";

export const Container = styled.div`
  width: 1280px;
  padding-top: 120px;
  margin: 0 auto;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  height: 40px;
  margin-bottom: 56px;
`;

export const SellDreamText = styled.div`
  font-style: Bold;
  font-size: 32px;
`;

export const SellManagementText = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export const SellingDreamListText = styled.div`
    font-size: 24px;
    color: white;
    margin-bottom: 28px;
`;

export const SellingDreamListContainer = styled.div`
    height: 1390px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 40px;
`;

export const PageNationContainer = styled.div`
    width: 412px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    color: white;
    margin: 0 auto;
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
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