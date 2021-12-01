import styled from "@emotion/styled";
import { color } from "../../../../style/color";
import { font } from "../../../../style/font";
import TextareaAutosize from "react-textarea-autosize";

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

export const ModifyBox = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const CommentText = styled(TextareaAutosize)`
  width: 100%;
  color: ${color.white};
  font: ${font.body3};
  background-color: ${color.darkerGray};
  border-radius: 10px;
  padding: 16px;
  outline: none;
  border: none;
  resize: none;
`;

export const ModifyButton = styled.div`
  padding: 0px 29px;
  color: ${color.white};
  background-color: ${color.blue};
  text-align: center;
  border-radius: 10px;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MoreBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const More = styled.img`
  margin: auto 0;
  cursor: pointer;
`;

export const CommentBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
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

export const CommentToCommentContainer = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  grid-gap: 20px;
`;

export const CommentInput = styled.input`
  width: 100%;
  color: ${color.white};
  font: ${font.body3};
  background-color: ${color.darkerGray};
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 16px;
  :placeholder {
    color: ${color.lightGray};
    font: ${font.body3};
  }
`;

export const EnterButton = styled.div`
  padding: 16px 12px;
  color: ${color.white};
  background-color: ${color.blue};
  text-align: center;
  border-radius: 10px;
  white-space: nowrap;
  cursor: pointer;
`;

export const CommentToComment = styled.div`
  width: 100%;
  transition: 1s;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
