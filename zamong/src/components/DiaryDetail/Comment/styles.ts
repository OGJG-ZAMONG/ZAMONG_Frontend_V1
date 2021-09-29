import styled from "@emotion/styled";
import { color } from "../../../style";
import { font } from "../../../style/font";

export const CommentContainer = styled.div`
  margin-bottom: 192px;
  padding-top: 48px;
  border-top: 1px solid ${color.darkGray};
`;

export const CommentTitle = styled.div`
  color: ${color.white};
  display: flex;
  margin-bottom: 28px;
`;

export const CommentCount = styled.div`
  color: ${color.blue};
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
`;

export const CommentInput = styled.input`
  color: ${color.lightGray};
  font: ${font.body3};
  background-color: ${color.darkerGray};
  outline: none;
  border: none;
  border-radius: 10px;
  grid-column: 1/12;
  height: 52px;
  padding-left: 16px;
`;

export const EnterButton = styled.div`
  color: ${color.white};
  background-color: ${color.blue};
  text-align: center;
  border-radius: 10px;
  line-height: 52px;
`;

export const CommentList = styled.div`
  margin-top: 48px;
`;

export const CommentBox = styled.div`
  width: 100%;
  display: flex;
  column-gap: 28px;
`;

export const CommentProfile = styled.div`
  width: 52px;
  height: 52px;
`;

export const CommnetRight = styled.div`
  width: 100%;
  display: grid;
  column-gap: 12px;
  row-gap: 12px;
  grid-template-columns: 1fr 24px;
`;

export const CommentText = styled.div`
  color: ${color.white};
  font: ${font.body3};
  background-color: ${color.darkerGray};
  border-radius: 10px;
  padding: 16px;
`;

export const More = styled.img`
  margin: auto 0;
`

export const CommentBoxBottom = styled.div`
  grid-column: 1/ 2;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CommentDetail = styled.div`
  display: flex;
`

export const CommentToggle = styled.div`
  color: ${color.white};
  display: flex;
  margin: auto 0;
`;

export const ToggleImg = styled.img`
  width: 13px;
  height: 7px;
  margin: auto 0;
`

export const CommentPlus = styled.div`
  color: ${color.gray};
  margin: auto 0;
  margin-left: 16px;
`;

export const PlusImg = styled.img`
  vertical-align: top;
  margin: auto 0;
  margin-right: 8px;
`

export const Recommend = styled.div`
  display: flex;
`

export const CommentLike = styled.div`
  color: ${color.gray};
  margin-right: 24px;
`

export const LikeImg = styled.img`
  margin-right: 8px;
`

export const CommentDisLike = styled.div`
  color: ${color.gray};
`

export const DisLikeImg = styled.img`
  margin-right: 8px;
`

export const CommentDate = styled.div`
  color: ${color.gray};
  margin-left: 28px;
`

export const CommentToCommnet = styled.div`
  grid-column: 1/ 3;
  margin-bottom: 12px;
`;