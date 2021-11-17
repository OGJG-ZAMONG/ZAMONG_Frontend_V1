import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

export const ContentContainer = styled.div`
  width: 1280px;
  background-color: ${color.black};
  margin: 0px auto;
  box-sizing: border-box;
`;

export const HelloSection = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 976px;
  display: flex;
`;

export const HelloContainer = styled.div`
  margin: auto 0px auto 650px;
`;

export const HelloTitle = styled.div`
  font: ${font.headline1};
  line-height: normal;
  color: ${color.white};
`;

export const HelloContent = styled.div`
  margin-top: 28px;
  font: ${font.body3};
  display: flex;
  row-gap: 8px;
  flex-direction: column;
  div {
    color: ${color.white};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const HelloInner = styled.div`
  column-gap: 16px;
  display: flex;
`;

export const HelloImage = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const SectionContainer = styled.div`
  row-gap: 86px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.div`
  font: ${font.headline3};
  color: white;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
