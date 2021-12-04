import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const FindBox = styled.div`
  width: 520px;
  height: 595px;
  background-color: ${color.darkerGray};
  border-radius: 10px;
  color: ${color.white};
  font: ${font.body3};
  position: fixed;
  left: 80%;
  top: 60%;
  transform: translate(-80%, -60%);
`;

export const PaddingBox = styled.div`
  margin: 66px 70px;
`;

export const Title = styled.div`
  font: ${font.headline1};
  margin-bottom: 86px;
`;

export const GuideWord = styled.div`
  color: ${color.gray};
  font: ${font.body3};
`;

export const Input = styled.input`
  margin-top: 15px;
  width: 100%;
  height: 32px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${color.darkGray};
  outline: none;
  color: ${color.white};
  font-size: 16px;
  margin-bottom: 16px;
`;

export const EventBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  column-gap: 8px;
  width: 100%;
`;

export const PrevButton = styled.div`
  padding: 6px 16px;
  color: ${color.white};
  border: 1px solid ${color.white};
  background-color: transparent;
  border-radius: 100px;
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
  cursor: pointer;
`;

export const NextButton = styled.div`
  padding: 6px 16px;
  color: ${color.white};
  background-color: ${color.blue};
  border-radius: 100px;
  cursor: pointer;
`;
