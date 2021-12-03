import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";

export const DreamContent = styled.div`
  display: flex;
`;

export const DreamImage = styled.div<{ img: any }>`
  width: 197px;
  height: 131px;
  display: flex;
  background-image: url(${(props) => props.img});
  align-items: baseline;
  box-sizing: border-box;
  background-size: cover;
  border-radius: 10px;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column-reverse;
  margin-right: 16px;
`;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0px 12px 12px 0px;
`;

export const UserName = styled.div`
  font: ${font.description};
  background-color: ${color.darkerGray};
  color: ${color.white};
  border-radius: 10px;
  padding: 12px 8px;
`;

export const DreamInfo = styled.div`
  padding-top: 16px;
  box-sizing: border-box;
  width: 60%;
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
  align-items: flex-start;
  width: 305px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  gap: 12px;
`;

export const DreamTagContent = styled.div`
  padding-top: 16px;
  height: 131px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${color.darkGray};
  margin: 12px 0px;
`;
