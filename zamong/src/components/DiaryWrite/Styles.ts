import styled from "@emotion/styled";
import { color } from "../../style";
import { font } from "../../style/font";
import TextareaAutosize from "react-textarea-autosize";
import { css } from "@emotion/react";

export const ContentContainer = styled.div`
  width: 1280px;
  background-color: ${color.black};
  margin: 0px auto;
  box-sizing: border-box;
`;

export const WriteSection = styled.div`
  padding-top: 120px;
  width: 100%;
`;

export const Title = styled.div`
  font: ${font.headline1};
  color: ${color.white};
  margin-bottom: 48px;
`;

export const Subtitle = styled.div`
  font: ${font.subtitle};
  color: ${color.gray};
  margin-bottom: 16px;
`;

export const MarginConatiner = styled.div`
  display: grid;
  row-gap: 48px;
`;

export const DetailMarginConatiner = styled.div`
  display: grid;
  row-gap: 12px;
`;

export const WriteContainer = styled.div`
  display: flex;
  row-gap: 48px;
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
  box-sizing: border-box;
  ::placeholder {
    color: ${color.gray};
    font: ${font.body3};
  }
`;

export const TitleCount = styled.div`
  font: ${font.body3};
  color: ${(props) => props.color};
  width: 100%;
  box-sizing: border-box;
  text-align: right;
`;

export const ButtonCss = css`
  padding: 6px 16px;
  outline: none;
  font: ${font.body3};
  color: ${color.white};
  border-radius: 100px;
  border: 0;
  cursor: pointer;
`;

export const BlueButton = styled.button`
  ${ButtonCss};
  background-color: ${color.blue};
  :hover {
    background-color: ${color.hoverBlue};
  }
`;

export const BorderButton = styled.button`
  ${ButtonCss};
  background-color: ${color.black};
  border: 1px solid ${color.white};
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
  :hover {
    background-color: ${color.hoverBlack};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 16px;
`;

export const LastChange = styled.div`
  font: ${font.body3};
  color: ${color.gray};
`;
