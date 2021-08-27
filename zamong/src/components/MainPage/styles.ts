import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {color} from "../../style/index";

export const ContentContainer = styled.div`
    width: 100%;
    background-color: ${color.black};
    padding: 0px 16.7%;
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
    font-size: 32px;
    font-weight: bold;
    line-height: normal;
    color: ${color.white};
`;

export const HelloContent = styled.div`
    display: flex;
    margin-top: 28px;
    a{
        margin-right: 16px;
        font-size: 16px;
        color: ${color.white};
        cursor: pointer;
        text-decoration: none;
        font-weight: 300;
    }
`;


export const HelloImage = styled.div`
    position: absolute;
    /* top: 539px; */
    top: 50%;
    left: 518px;
    transform: translate(-50%, -50%);
`