import styled from "@emotion/styled";
import { font } from "../../../../../style/font";

export const DateColumn = styled.div<{ height: number }>`
  overflow: hidden;
  height: ${(props) => props.height * 5}px;
`;

export const DateColumnInner = styled.div<{ y: number; isWheel: boolean }>`
  position: relative;
  transition: ${(props) => (props.isWheel ? "" : "transform 0.25s ease-out")};
  transform: translateY(${(props) => props.y}px);
`;

export const DateCell = styled.div<{
  height: number;
  angle: number;
  opacity: number;
  isWheel: boolean;
}>`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  color: ${(props) => props.color};
  font: ${font.body3};
  height: ${(props) => props.height}px;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  user-select: none;
  transition: opacity 0.25s ease-out
    ${(props) => (props.isWheel ? "" : ",transform 0.25s ease-out;")};

  transform: rotateX(${(props) => props.angle}deg);
  opacity: ${(props) => props.opacity};
  padding: 0px 4px;
`;
