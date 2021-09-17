import styled from "@emotion/styled";
import { leftside, rightside } from "../../assets/index";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LeftSide = styled.div`
  width: 360px;
  height: 800px;
  background-image: url(${leftside});
  background-size: cover;
  margin-top: 70px;
  float: left;
`;

export const RightSide = styled.div`
  width: 425px;
  height: 700px;
  background-image: url(${rightside});
  background-size: cover;
  float: right;
  margin-top: 170px;
`;

export const TextBox = styled.div`
  width: 300px;
  height: 195px;
  border: 1px solid yellow;
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
