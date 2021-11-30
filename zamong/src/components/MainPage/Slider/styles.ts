import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
`;

export const Outer = styled.div`
  position: relative;
`;

export const List = styled.div<{ x: number; gap: number }>`
  display: flex;
  column-gap: ${(props) => props.gap}px;
  transform: translateX(${(props) => props.x}px);
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
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
  top: 42.5%;
  left: ${(props) => props.left}%;
  cursor: pointer;
  user-select: none;
`;
