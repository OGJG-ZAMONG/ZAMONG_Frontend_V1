import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const ChangeBox = styled.div`
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
  padding: 66px 70px;
`;

export const Title = styled.div`
  font: ${font.headline1};
  margin-bottom: 86px;
`;

export const GuideContaier = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.div`
  color: ${color.red};
  font: ${font.body3};
`;

export const GuideWord = styled.div`
  color: #8e8e93;
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
  width: 100%;
`;

export const NextButton = styled.div`
  padding: 6px 16px;
  color: ${color.white};
  background-color: ${color.blue};
  border-radius: 100px;
  cursor: pointer;
`;
