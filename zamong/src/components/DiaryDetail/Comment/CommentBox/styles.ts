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
  position: relative;
`;

export const Profile = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

export const UserName = styled.div`
  position: absolute;
  padding: 12px 8px;
  font: ${font.description};
  background-color: ${color.darkerGray};
  color: ${color.white};
  border-radius: 10px;
  white-space: nowrap;
  transform: translateX(calc(-100% - 8px)) translateY(-122.5%);
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
  padding: 15px 0px;
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
  box-sizing: border-box;
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

export const InputInner = styled.div`
  width: 100%;
  grid-column: 1/12;
  position: relative;
  box-sizing: border-box;
`;

export const AnonymousButton = styled.div`
  font: ${font.description};
  color: ${(props) => props.color};
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`;

export const EnterButton = styled.button`
  padding: 16px 12px;
  color: ${color.white};
  background-color: ${color.blue};
  text-align: center;
  border-radius: 10px;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  outline: none;
  font: ${font.body3};
  &:disabled {
    filter: brightness(0.8);
  }
`;

export const CommentToComment = styled.div`
  width: 100%;
  transition: 1s;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
