import styled from "@emotion/styled";
import * as G from "../globalstyle";
import { Link } from "react-router-dom";
import { font } from "../../../style/font";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 48px;
`;

export const FollowContainer = styled.div`
  display: flex;
  column-gap: 18px;
  justify-content: right;
  align-items: center;
`;

export const Follow = styled(Link)<{ img: any }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;

export const MoreIcon = styled.img`
  width: 24px;
  user-select: none;
  cursor: pointer;
`;

export const SectionTitle = styled(G.SectionTitle)`
  font: ${font.headline3};
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`;
