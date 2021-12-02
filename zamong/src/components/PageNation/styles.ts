import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 16px;
  font: ${font.subtitle};
  cursor: pointer;
`;

export const Enable = styled.div`
  color: ${color.blue};
`;

export const Div = styled.div`
  color: ${color.gray};
  &:hover {
    color: ${color.white};
  }
`;
