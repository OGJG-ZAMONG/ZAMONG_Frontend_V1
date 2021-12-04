import { color } from "../../../style/color";
import { font } from "../../../style/font";
import styled from "@emotion/styled";

export const Content = styled.div`
  width: 100%;
  margin-top: 68px;
`;

export const Follower = styled.p`
  font: ${font.headline3};
  color: ${color.white};
  margin-bottom: 28px;
  span {
    color: ${color.blue};
  }
`;

export const FolloweList = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  text-align: center;
  font: ${font.body3};
  color: ${color.white};
`;
