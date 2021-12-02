import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const Container = styled.div`
  width: 1280px;
  margin: 0px auto;
  box-sizing: border-box;
  color: ${color.white};
  padding-top: 120px;
`;

export const Title = styled.div`
  font: ${font.headline1};
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const Subtitle = styled.div`
  font: ${font.subtitle};
  color: ${color.gray};
  margin-bottom: 16px;
`;

export const TextArea = styled(TextareaAutosize)`
  background-color: ${color.darkerGray};
  border-radius: 10px;
  padding: 16px;
  color: ${color.white};
  font: ${font.body3};
  border: 0;
  outline: none;
  resize: none;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
  ::placeholder {
    color: ${color.gray};
    font: ${font.body3};
  }
`;

export const TextAreaContent = styled(TextArea)`
  min-height: 92px;
`;

export const TitleCount = styled.div`
  font: ${font.body3};
  color: ${(props) => props.color};
  width: 100%;
  box-sizing: border-box;
  text-align: right;
`;
