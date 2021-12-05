import styled from "@emotion/styled";
import * as G from "../styles";
import { Link } from "react-router-dom";
import { font } from "../../../style/font";
import { color } from "../../../style/color";

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

export const FollowSkeleton = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${color.gray};
`;

export const MoreIcon = styled.img`
  width: 24px;
  user-select: none;
  cursor: pointer;
  padding: 12px 0px;
`;

export const SectionTitle = styled(G.SectionTitle)`
  font: ${font.headline3};
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`;
