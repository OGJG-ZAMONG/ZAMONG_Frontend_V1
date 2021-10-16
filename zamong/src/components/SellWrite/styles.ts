import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const ContentContainer = styled.div`
  width: 1280px;
  background-color: ${color.black};
  margin: 0px auto;
  box-sizing: border-box;
`;

export const WriteSection = styled.div`
  padding-top: 120px;
  width: 100%;
`;

export const Title = styled.div`
  font: ${font.headline1};
  color: ${color.white};
  margin-bottom: 48px;
`;
