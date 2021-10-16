import styled from "@emotion/styled";
import { color } from "../../../../../../../style/color";
import { font } from "../../../../../../../style/font";

export const TagContainer = styled.div`
  background-color: ${color.hoverBlack};
  display: flex;
  padding: 16px;
  column-gap: 12px;
  row-gap: 12px;
  flex-wrap: nowrap;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font: ${font.body3};
  color: ${color.white};
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const TypeContainer = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;
