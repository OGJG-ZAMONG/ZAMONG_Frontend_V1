import styled from "@emotion/styled";
import { Subtitle } from "../../../styles";

export const SubTitleContainer = styled(Subtitle)`
  transition: all 0.25s ease-out;
  position: relative;
  width: 90%;
  box-sizing: border-box;
`;

export const Item = styled.div<{ left: number; opacity: number }>`
  color: ${(props) => props.color};
  transition: transform 1.2s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.25s ease-out;
  transform: translateX(${(props) => props.left}px);
  position: absolute;
  opacity: ${(props) => props.opacity};
`;
