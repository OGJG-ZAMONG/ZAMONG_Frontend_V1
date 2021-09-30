import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { font } from "../../style/font";
import {color} from "../../style/color";

export const HeaderContainer = styled.div<{pd: number, lineOpacity : number}>`
    font: ${font.body3};
    width: 100%;
    height: 64px;
    background-color: ${props => props.lineOpacity === 1 ? color.black : 'rgba(0, 0, 0, 0)'};
    display: flex;
    align-items: center;
    position: fixed;
    padding-top: ${props => props.pd}px;
    transition: padding 0.25s ease-out, background-color 0.25s ease-out;
    z-index: 3;
    
    &:after{
        z-index: 2;
        content: "";
        transition: opacity 0.25s ease-out;
        display: inline-block;
        width: calc((100%) - (64px));
        position: absolute;
        height: 1px;
        top: 100%;
        left: 50%;
        opacity: ${props => props.lineOpacity};
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
    font-size: 16px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    transition: all 0.15s ease-in-out;
    &:first-of-type{
        margin-right: 16px;
    }
`;

export const BlueButton = styled.button`
    background-color: ${color.blue};
    color: ${color.white};
    &:hover{
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
    &:hover{
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
    img{
        margin-right: 8px;
    }
`;

export const SearchInput = styled.input`
    outline: none;
    color: ${color.white};
    border: none;
    font-size: 16px;
    background-color: ${color.darkGray};
    width: 100%;
    &::placeholder{
        color: ${color.lightGray};
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;
