import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const LoginBox = styled.div`
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
`

export const Title = styled.div`
  font: ${font.headline1};
`;

export const MainContainer = styled.form`
  margin-top: 86px;
  margin-bottom: 105px;
`;

export const GuideWord = styled.div`
  color: ${color.gray};
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
  font: ${font.body3};
  margin-bottom: 28px;
`;

export const LinkBox = styled.div`
  a {
    color: ${color.blue};
    text-decoration: none;
    font: ${font.body1};
  }

  &:last-child {
    text-align: center;
  }
`;

export const LoginButton = styled.div`
  width: 77px;
  height: 32px;
  border: none;
  background-color: ${color.blue};
  font: ${font.body2};
  text-align: center;
  line-height: 2;
  border-radius: 100px;
  cursor: pointer;
`;

export const EventBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
