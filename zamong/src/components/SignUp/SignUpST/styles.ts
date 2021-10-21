import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const SignupBox = styled.div`
  width: 450px;
  height: 529px;
  background-color: #2c2c2e;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  padding-top: 66px;
  padding-left: 70px;
  position: fixed;
  left: 80%;
  top: 60%;
  transform: translate(-80%, -60%);
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 86px;
`;

export const GuideContaier = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ErrorMessage = styled.div`
  color: ${color.red};
  font: ${font.body3};
  margin-right: 70px;
`

export const GuideWord = styled.div`
  color: #8e8e93;
  font: ${font.body3};
`;

export const Input = styled.input`
  margin-top: 15px;
  width: 380px;
  height: 32px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #636366;
  outline: none;
  color: white;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const IdInput = styled(Input)`
  margin-bottom: 28px;
`;

export const EventBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 248px;
`;

export const PrevButton = styled.div`
  width: 62px;
  height: 32px;
  font-size: 16px;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 100px;
  text-align: center;
  line-height: 2;
`;

export const NextButton = styled.div`
  width: 62px;
  height: 32px;
  font-size: 16px;
  color: white;
  border: 1px solid transparent;
  background-color: #0a84ff;
  border-radius: 100px;
  text-align: center;
  line-height: 2;
  margin-left: 8px;
`;
