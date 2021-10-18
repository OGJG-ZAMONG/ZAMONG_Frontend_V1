import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const Container = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: ${color.darkerGray};
  border-radius: 10px;
  outline: none;
  color: ${color.white};
  padding: 16px;
  font: ${font.body3};
  box-sizing: border-box;
`;
