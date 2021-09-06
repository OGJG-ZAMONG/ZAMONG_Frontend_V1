import styled from "@emotion/styled";
import * as I from "../Index";
import { Link } from "react-router-dom";

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

export const SectionTitle = styled(I.SectionTitle)`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`;
