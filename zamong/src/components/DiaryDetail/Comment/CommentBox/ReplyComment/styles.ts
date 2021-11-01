import styled from "@emotion/styled";
import { color } from "../../../../../style/color";

export const CommentToggle = styled.div`
  color: ${color.white};
  display: flex;
  margin: auto 0;
  cursor: pointer;
`;

export const ToggleImg = styled.img<{ rotate: number }>`
  user-select: none;
  cursor: pointer;
  transform: rotate(${(props) => props.rotate}deg);
  transition: 0.5s;
`;

export const CommentPlus = styled.div`
  color: ${color.gray};
  display: flex;
  margin: auto 0;
  margin-left: 16px;
  cursor: pointer;
`;

export const PlusImg = styled.img`
  margin-right: 8px;
`;
