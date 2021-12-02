import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const FilterContainer = styled.div`
  color: ${color.white};
  font: ${font.body3};
  z-index: 3;
  img {
    margin-right: 8px;
  }
`;

export const FilterButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
`;

export const FilterInner = styled.div`
  display: flex;
  align-items: center;
`;
