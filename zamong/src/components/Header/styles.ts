import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

export const HeaderContainer = styled.div<{ pd: number; lineOpacity: number }>`
  font: ${font.body3};
  width: 100%;
  height: 64px;
  background-color: ${color.black}${(props) => props.lineOpacity === 0 && "00"};
  display: flex;
  align-items: center;
  position: fixed;
  transform: translateY(${(props) => props.pd}px);
  transition: transform 0.25s ease-out, background-color 0.25s ease-out;
  z-index: 3;
  min-width: 1000px;
  will-change: transform background-color;

  &:after {
    will-change: opacity;
    z-index: 2;
    content: "";
    transition: opacity 0.25s ease-out;
    display: inline-block;
    width: calc((100%) - (64px));
    position: absolute;
    height: 1px;
    top: 100%;
    left: 50%;
    opacity: ${(props) => props.lineOpacity};
    transform: translateX(-50%);
    background-color: ${color.darkGray};
  }
`;

export const HeaderContentContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const LogoConainer = styled.div`
  box-sizing: border-box;
  width: 16.7%;
  display: flex;
  align-items: center;
`;

export const LogoOuter = styled.div`
  margin-left: 32px;
`;

export const RightOuter = styled.div`
  margin-right: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  width: 83.3%;
`;

const ButtonDefaultStyle = css`
  font: ${font.body3};
  border: 0;
  border-radius: 100px;
  box-shadow: 0;
  padding: 6px 16px;
  outline: none;
  cursor: pointer;
  will-change: background-color;
  transition: all 0.15s ease-in-out;
`;

export const BlueButton = styled.button`
  background-color: ${color.blue};
  color: ${color.white};
  &:hover {
    background-color: ${color.hoverBlue};
  }
  ${ButtonDefaultStyle};
`;

export const BorderButton = styled.button`
  ${ButtonDefaultStyle}
  background-color: ${color.black};
  color: ${color.white};
  border: 1px solid ${color.white};
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
  &:hover {
    background-color: ${color.hoverBlack};
  }
`;

export const SearchInputContainer = styled.div`
  font: ${font.body3};
  padding: 10px 16px;
  background-color: ${color.darkGray};
  display: flex;
  align-items: center;
  border-radius: 100px;
  width: 630px;
  box-sizing: border-box;
  margin-right: 16px;
  transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  will-change: width;
  img {
    margin-right: 8px;
  }
  @media only screen and (max-width: 1600px) {
    width: 300px;
  }
`;

export const SearchInput = styled.input`
  outline: none;
  color: ${color.white};
  border: none;
  font-size: 16px;
  background-color: ${color.darkGray};
  width: 100%;
  &::placeholder {
    color: ${color.lightGray};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RightContentContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;
