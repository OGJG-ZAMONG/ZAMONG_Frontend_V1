import styled from "@emotion/styled";
import { color } from "../../../../../../style/color";

export const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${color.darkerGray};
  padding: 16px;
`;

export const Header = styled.div``;

export const Content = styled.div``;
export const ContentWrapper = styled.div<{ padding: number }>`
  height: 0px;
  overflow: hidden;
  transition: height 0.25s ease-out, opacity 0.25s ease-out;
  opacity: 0;
  padding-bottom: ${(props) => props.padding}px;
  box-sizing: content-box;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const Button = styled.img<{ rotate: number }>`
  user-select: none;
  cursor: pointer;
  transform: rotate(${(props) => props.rotate}deg);
`;
