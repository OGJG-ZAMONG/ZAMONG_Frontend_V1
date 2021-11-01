import styled from "@emotion/styled";
import { color } from "../../../../../style/color";

export const Recommend = styled.div`
  display: flex;
`;

export const CommentLike = styled.div`
  color: ${(props) => props.color};
  margin-right: 24px;
  cursor: pointer;
`;

export const LikeImg = styled.img`
  margin-right: 8px;
`;

export const CommentDisLike = styled.div`
  color: ${(props) => props.color};
  cursor: pointer;
`;

export const DisLikeImg = styled.img`
  margin-right: 8px;
`;