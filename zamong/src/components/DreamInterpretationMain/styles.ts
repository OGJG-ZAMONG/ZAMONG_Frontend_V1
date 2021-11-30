import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const Container = styled.div`
  width: 1280px;
  margin: 0px auto;
  box-sizing: border-box;
  color: ${color.white};
  padding-top: 120px;
`;

export const Title = styled.div`
  font: ${font.headline1};
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 86px;
  margin-top: 48px;
`;
