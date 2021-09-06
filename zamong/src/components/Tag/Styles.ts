import styled from "@emotion/styled";
import { color } from "../../style";
import { font } from "../../style/font";

export const TagContainer = styled.div`
  background-color: ${color.darkGray};
  padding: 4px 12px;
  font: ${font.description};
  color: ${color.white};
  border-radius: 100px;
  height: fit-content;
  width: fit-content;
  position: relative;
`;
