import styled from "@emotion/styled";
import { font } from "../../../../style/font";

export const ContentBox = styled.div`
  width: 304px;
  height: 296px;
`;

export const TopBox = styled.div<{ img: string }>`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  aspect-ratio: 3 / 2;
  background-size: cover;
  border-radius: 20px;
  padding: 24px;
  background-image: url(${(props) => props.img});
  align-items: flex-end;
  justify-content: space-between;
`;

export const Price = styled.div`
  aspect-ratio: 2.3 / 1;
  background: #8e8e93;
  border-radius: 100px;
  color: white;
  font: ${font.body2};
  display: flex;
  justify-content: center;
  padding: 6px 8px;
`;

export const Date = styled.div`
  font: ${font.body2};
  padding: 5px;
`;

export const BottomBox = styled.div`
  width: 305px;
  height: 100px;
`;

export const Tag = styled.div`
  display: flex;
  justify-self: default;
  margin-top: 12px;
  div {
    margin: 0 1%;
  }
`;

export const Title = styled.div`
  color: white;
  font: ${font.body2};
  padding: 0 4px;
  margin-top: 10px;
`;
