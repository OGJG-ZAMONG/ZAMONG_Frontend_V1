import styled from "@emotion/styled";
import { color } from "../../style/color";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 0px;
  background-color: ${color.darkGray};
`;

export const Img = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  background-color: ${color.gray};
  border-radius: 10px;
  grid-column: 1 / 3;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding-top: 16px;
  grid-column: 3 / 10;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const TagContainer = styled.div`
  width: 100%;
  padding-top: 16px;
  grid-column: 10 / 13;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  gap: 12px;
`;

export const Tag = styled.div`
  width: 70px;
  background-color: ${color.gray};
  height: 28px;
  border-radius: 100px;
`;

export const Title = styled.div`
  width: 80%;
  height: 26px;
  background-color: ${color.gray};
  border-radius: 5px;
`;

export const Lucy = styled.div`
  width: 10%;
  height: 20px;
  background-color: ${color.gray};
  border-radius: 5px;
`;

export const Date = styled.div`
  width: 20%;
  height: 20px;
  background-color: ${color.gray};
  border-radius: 5px;
`;
