import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const Container = styled(Link)`
  outline: none;
  text-decoration: none;
`;

export const Price = styled.div`
  backdrop-filter: blur(10px);
  background: rgb(0, 0, 0, 0.4);
  border-radius: 100px;
  color: ${color.white};
  padding: 5px 8px;
  font: ${font.description};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 36px;
  height: 36px;
  color: ${color.white};
  margin: 12px 0;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const TagsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: right;
  align-items: center;
  div {
    margin: 0 1%;
  }
`;

export const ProfilePicture = styled.img`
  max-width: 36px;
  min-width: 36px;
  min-height: 36px;
  max-height: 36px;
  border-radius: 100%;
  margin-right: 6%;
`;

export const UserName = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
`;

export const SellingDreamTitle = styled.div`
  color: ${color.white};
  font: ${font.body2};
  padding: 0 4px;
`;
