import styled from "@emotion/styled";
import { color } from "../../../style/color";
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
  ::placeholder {
    color: ${color.lightGray};
    font: ${font.body3};
  }
`;

export const EnterButton = styled.div`
  color: ${color.white};
  background-color: ${color.blue};
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CommentList = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;
