import styled from "@emotion/styled";
import { color } from "../../../../../style/color";
import { font } from "../../../../../style/font";

export const DateColumn = styled.div<{ height: number }>`
  overflow: hidden;
  height: ${(props) => props.height * 5}px;
  &:first-of-type {
    ::after {
      content: "";
      width: 100%;
      height: 40%;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 1000;
      top: 100%;
      transform: translateY(-100%);
      background: linear-gradient(180deg, ${color.darkerGray}00 20%, ${color.darkerGray});
    }
    ::before {
      content: "";
      width: 100%;
      height: 40%;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 1000;
      top: 0;
      background: linear-gradient(0deg, ${color.darkerGray}00 20%, ${color.darkerGray});
    }
  }
`;

export const DateColumnInner = styled.div<{ y: number; isWheel: boolean }>`
  position: relative;
  transition: ${(props) => (props.isWheel ? "" : "transform 0.25s ease-out")};
  transform: translateY(${(props) => props.y}px) perspective(300px);
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
  transition: ${(props) => !props.isWheel && "transform 0.25s ease-out;"};

  transform: rotateX(${(props) => props.angle}deg);
  opacity: ${(props) => props.opacity};
  padding: 0px 4px;
`;
