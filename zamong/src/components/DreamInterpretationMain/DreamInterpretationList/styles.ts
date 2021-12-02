import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const ContentInner = styled.div`
  width: 100%;
  display: flex;
  row-gap: 28px;
  flex-direction: column;
`;

export const Subtitle = styled.div`
  font: ${font.headline3};
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Write = styled(Link)`
  font: ${font.body3};
  text-decoration: none;
  color: ${color.gray};
  background-color: transparent;
  text-align: right;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  &:hover {
    color: ${color.white};
  }
`;

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 12px;
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
