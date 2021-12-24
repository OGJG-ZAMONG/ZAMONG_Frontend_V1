import { color } from "../../../style/color";
import { font } from "../../../style/font";
import styled from "@emotion/styled";

export const Content = styled.div`
  width: 100%;
  margin-top: 68px;
`;

export const Follower = styled.p`
  color: ${color.white};
  font: ${font.headline3};
  margin-bottom: 28px;
  span {
    color: ${color.blue};
  }
`;

export const FollowerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-bottom: 90px;
`;

export const Text = styled.p`
  text-align: center;
  font: ${font.body3};
  color: ${color.white};
`;

export const MoreContaier = styled.div`
  width: 100%;
  padding: 12px 0px;
  color: ${color.white};
  font: ${font.body3};
  display: flex;
  justify-content: center;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${color.hoverBlack};
  }

  img {
    margin-left: 4px;
  }
`;
