import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const Title = styled.div`
  font: ${font.body2};
  color: ${color.white};
`;

export const TitleContainer = styled.div`
  width: 125px;
`;

export const Subtitle = styled.div`
  font: ${font.body2};
  color: ${color.lightGray};
  user-select: none;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;
