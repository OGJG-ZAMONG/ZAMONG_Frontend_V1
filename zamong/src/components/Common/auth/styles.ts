import styled from "@emotion/styled";
import { leftside, rightside } from "../../../assets/index";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

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
  width: 200px;
  height: 195px;
  position: absolute;
  margin-top: 153px;
  margin: 150px 0 0 320px;

  span {
    font-size: 20px;
    min-width: 11px;
    white-space: nowrap;
    margin: 0;
    position: fixed;
    color: transparent;
    font: ${font.headline3};
  }

  span::before {
    content: "몽환적인 꿈이 자몽을 만나 현실에 스며들다";
    position: absolute;
    width: 100%;
    height: 100%;
    font: ${font.headline3};
    color: ${color.white};
    overflow: hidden;
    animation: typing 3.8s steps(20);
  }
  @keyframes typing {
    0% {
      width: 0%;
    }
    50% {
      width: 100%;
    }
  }
`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 38px;
`;
