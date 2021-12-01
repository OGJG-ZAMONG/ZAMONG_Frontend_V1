import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const SignupBox = styled.div`
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
`;

export const NumberContainer = styled.div`
  margin-bottom: 186px;
`;

export const NumberBox = styled.input`
  width: 53px;
  height: 53px;
  margin-top: 16px;
  margin-right: 12px;
  text-align: center;
  font: ${font.headline1};
  color: ${color.white};
  background-color: ${color.darkGray};
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;

  &:last-child {
    margin-right: 0;
  };
`;

export const EventBox = styled.div`
  display: flex;
  align-items: center;
  width: 132px;
  margin-left: 100%;
  transform: translateX(-132px);
  justify-content: space-between;
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
