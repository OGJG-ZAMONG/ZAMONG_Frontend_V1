import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";
import { Link } from "react-router-dom";

export const DreamContainer = styled(Link)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  contain: paint;
  text-decoration: none;
  color: ${color.white};
  border-radius: 10px;
  transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  will-change: background-color;
  &:hover {
    background-color: ${color.hoverBlack};
  }
`;

export const DreamImage = styled.div<{ img: any }>`
  width: 100%;
  display: flex;
  grid-column: 1 / 3;
  align-items: baseline;
  justify-content: space-between;
  box-sizing: border-box;
  aspect-ratio: 3 / 2;
  background-size: cover;
  border-radius: 10px;
  padding: 12px;
  background-image: url(${(props) => props.img});
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column-reverse;
  contain: paint;
`;

export const DreamUserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.div`
  padding: 12px 8px;
  font: ${font.description};
  background-color: ${color.darkerGray};
  color: ${color.white};
  border-radius: 10px;
  position: absolute;
  transform-origin: right;
  transform: translateY(12.5%) translateX(-40px);
`;

export const DreamInfoContainer = styled.div`
  padding-top: 16px;
  grid-column: 3 / 10;
  div {
    margin-bottom: 8px;
  }
`;

export const DreamTitle = styled.div`
  font: ${font.subtitle};
  color: ${color.white};
`;

export const DreamLucy = styled.div`
  font: ${font.body3};
  color: ${color.lightGray};
`;

export const DreamDate = styled.div`
  font: ${font.description};
  color: ${color.lightGray};
`;

export const DreamTagInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  gap: 12px;
`;

export const DreamTagContainer = styled.div`
  padding-top: 16px;
  grid-column: 10 / 13;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${color.darkGray};
  margin: 12px 0px;
`;
