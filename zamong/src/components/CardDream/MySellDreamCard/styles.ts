import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  div {
    margin: 0 1%;
  }
`;

export const PostInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.white};
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const DreamTitle = styled.div`
  font: ${font.body3};
  color: ${color.white};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  line-height: 1.5em;
  max-height: 3em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;
