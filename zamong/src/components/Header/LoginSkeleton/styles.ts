import styled from "@emotion/styled";
import { color } from "../../../style/color";

export const NavContainer = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: center;
`;

export const Nav = styled.div`
  background-color: ${color.darkGray};
  width: 60px;
  height: 24px;
  color: transparent;
  user-select: none;
`;

export const Circle = styled.div`
  background-color: ${color.darkGray};
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

export const BorderButton = styled.div`
  background-color: ${color.darkGray};
  height: 36px;
  width: 80px;
  border-radius: 100px;
`;
