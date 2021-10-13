import styled from "@emotion/styled";
import { color } from "../../../../../style/color";

export const CommentToggle = styled.div<{ display: string }>`
  color: ${color.white};
  display: ${(props) => props.display};
  margin: auto 0;
`;

export const ToggleImg = styled.img<{ rotate: number }>`
  user-select: none;
  cursor: pointer;
  transform: rotate(${(props) => props.rotate}deg);
`;

export const CommentPlus = styled.div`
  color: ${color.gray};
  display: flex;
  margin: auto 0;
  margin-left: 16px;
`;

export const PlusImg = styled.img`
  margin-right: 8px;
`;
