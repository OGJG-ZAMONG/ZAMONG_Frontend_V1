import { color } from "../../../style/color";
import { font } from "../../../style/font";
import styled from "@emotion/styled";

export const HeadText = styled.p`
  color: ${color.white};
  font: ${font.headline3};
  margin-bottom: 24px;
  span {
    color: ${color.blue};
  }
`;

export const DreamText = styled.p`
  color: ${color.white};
  font: ${font.body3};
  text-align: center;
`;

export const More = styled.div`
  color: ${color.white};
  font: ${font.body3};
  width: 100%;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: ${color.hoverBlack};
  }
  img {
    margin-left: 8px;
  }
`;
