import styled from "@emotion/styled";
import { color } from "../../../../../../../style/color";
import { font } from "../../../../../../../style/font";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const TagContainer = styled.div`
  display: flex;
  column-gap: 12px;
  row-gap: 12px;
  box-sizing: border-box;
  min-height: 27px;
`;

export const TagStyle = styled.div`
  cursor: pointer;
`;

export const Title = styled.div`
  font: ${font.body3};
  color: ${color.white};
  margin-right: 28px;
`;

export const TypeContainer = styled.div`
  display: flex;
  column-gap: 12px;
  min-height: 27px;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;
