import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from "../../style";
import { font } from "../../style/font";

export const FooterContainer = styled.div`
    width: 1280px;
    margin: 0px auto;
    box-sizing: border-box;
    `;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${color.darkGray};
    margin-top: 56px;
    margin-bottom: 28px;
    box-sizing: border-box;
    `;

export const Inner = styled.div`
    margin-top: 28px;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    display: grid;
    margin-bottom: 100px;
`;
export const CopyRight = styled.div`
    text-align: center;
    font: ${font.body3};
    color: ${color.white};
    margin-bottom: 28px;
`;
export const FooterTitle = styled.div`
    display: flex;
    img{
        margin-right: 8px;
    }
    font: ${font.body1};
    color: ${color.white};
    align-items: center;
    `;

export const FooterContent = styled(Link)`
    color: ${color.white};
    align-items: center;
    font: ${font.body3};
    display: flex;
    text-decoration: none;
    img{
        margin-right: 8px;
    }
`;


export const FooterContentDiv = styled.div`
    color: ${color.white};
    align-items: center;
    font: ${font.body3};
    display: flex;
    text-decoration: none;
    img{
        margin-right: 8px;
    }
`;
export const Flex = styled.div`
    display: flex;
`;