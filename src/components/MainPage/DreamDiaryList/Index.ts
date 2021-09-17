import styled from "@emotion/styled";
import { color } from "../../../style";
import { font } from "../../../style/font";

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.div<{ left: number }>`
  background-color: ${color.darkerGray};
  color: ${color.gray};
  font: ${font.headline2};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48.5px;
  height: 48.5px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: ${(props) => props.left}%;
  cursor: pointer;
  user-select: none;
`;

export const DreamPostingList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;
