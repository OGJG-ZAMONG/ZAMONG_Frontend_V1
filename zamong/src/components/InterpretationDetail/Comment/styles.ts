import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const CommentContainer = styled.div`
  margin-top: 131px;
  margin-bottom: 192px;
  padding-top: 48px;
  border-top: 1px solid ${color.darkGray};
`;

export const CommentTitle = styled.div`
  color: ${color.white};
  font: ${font.headline2};
  display: flex;
  margin-bottom: 28px;
`;

export const CommentCount = styled.div`
  color: ${color.blue};
`;

export const InterpretationDone = styled.div`
  color: ${color.gray};
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
`;

export const InputInner = styled.div`
  width: 100%;
  grid-column: 1/12;
  position: relative;
  box-sizing: border-box;
`;

export const CommentInput = styled.input`
  box-sizing: border-box;
  color: ${color.lightGray};
  font: ${font.body3};
  background-color: ${color.darkerGray};
  outline: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 52px;
  padding-left: 16px;
  ::placeholder {
    color: ${color.lightGray};
    font: ${font.body3};
  }
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
  color: ${color.white};
  background-color: ${color.blue};
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: 0;
  font: ${font.body3};

  &:disabled {
    filter: brightness(0.8);
  }
`;

export const CommentList = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;
