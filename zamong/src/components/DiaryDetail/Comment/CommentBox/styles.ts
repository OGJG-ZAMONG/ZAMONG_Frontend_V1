import styled from "@emotion/styled";
import { color } from "../../../../style/color";
import { font } from "../../../../style/font";

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
`;

export const CommentBoxBottom = styled.div`
  grid-column: 1/ 2;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const DetailLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailRight = styled.div`
  display: flex;
`;

export const CommentDate = styled.div`
  color: ${color.gray};
  margin-left: 28px;
`;

export const InputContainer = styled.div`
  width: 100%;
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

export const CommentToComment = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  grid-column: 1/ 3;
  margin-bottom: 12px;
  transition: 1s;
`;
