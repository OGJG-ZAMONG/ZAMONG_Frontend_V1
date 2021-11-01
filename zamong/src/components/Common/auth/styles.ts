import styled from "@emotion/styled";
import { leftside, rightside } from "../../../assets/index";
import { color } from "../../../style/color";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.black};
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  width: 360px;
  height: 800px;
  background-image: url(${leftside});
  background-size: cover;
  margin-top: 70px;
`;

export const RightSide = styled.div`
  width: 425px;
  height: 700px;
  background-image: url(${rightside});
  background-size: cover;
  margin-top: 170px;
`;

export const TextBox = styled.div`
  width: 300px;
  height: 195px;
  position: absolute;
  margin-top: 153px;
  margin: 150px 0 0 320px;
`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 38px;
`;

export const Content = styled.span`
  color: #ffffff;
  font-size: 30px;
  word-break: break-all;
`;
