import styled from "@emotion/styled";
import { color } from "../../../../../style";

export const ColumnContainer = styled.div<{ height: number }>`
  ::after {
    content: "";
    width: 100%;
    height: 1px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    transform: translateY(${(props) => props.height / 2}px);
    background-color: ${color.gray};
  }
  ::before {
    content: "";
    width: 100%;
    height: 1px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    transform: translateY(-${(props) => props.height / 2}px);
    background-color: ${color.gray};
  }
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
`;
