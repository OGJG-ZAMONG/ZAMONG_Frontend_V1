import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const SignupBox = styled.div`
  width: 520px;
  height: 595px;
  background-color: ${color.darkerGray};
  border-radius: 10px;
  color: white;
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

export const GuideContaier = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.div`
  color: ${color.red};
  font: ${font.body3};
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
  margin-bottom: 28px;
  font: ${font.body3};
`;

export const Check = styled(Input)`
  margin-bottom: 16px;
`;

export const EventBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 132px;
  margin-left: 100%;
  transform: translateX(-132px);
`;

export const PrevButton = styled.div`
  width: 62px;
  height: 32px;
  color: ${color.white};
  border: 1px solid ${color.white};
  background-color: transparent;
  border-radius: 100px;
  text-align: center;
  line-height: 2;
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
  cursor: pointer;
`;

export const NextButton = styled.div`
  width: 62px;
  height: 32px;
  color: ${color.white};
  border: 1px solid transparent;
  background-color: ${color.blue};
  border-radius: 100px;
  text-align: center;
  line-height: 2;
  cursor: pointer;
`;
