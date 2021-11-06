import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

export const DreamCardContainer = styled.div`
  width: 100%;
`;

export const DreamImageContainer = styled.div<{ img: any }>`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-sizing: border-box;
  aspect-ratio: 3 / 2;
  background-size: cover;
  border-radius: 20px;
  padding: 24px;
  background-image: url(${(props) => props.img});
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const DreamTitle = styled.div`
  margin-top: 16px;
  font: ${font.body3};
  color: ${color.white};
`;

export const DiaryDate = styled.div`
  font: ${font.body3};
`;
