import styled from "@emotion/styled";
import { color } from "../../../style";
import { font } from "../../../style/font";

export const MoreContaier = styled.div`
    width: 100%;
    padding: 12px 0px;
    color: ${color.white};
    font: ${font.body3};
    display: flex;
    justify-content: center;
    transition: background-color 0.15s ease-in-out;
    cursor: pointer;
    user-select: none;
    :hover{
        background-color: ${color.hoverBlack};
    }
`;


export const SectionTitle = styled.div`
    font: ${font.headline3};
    color: ${color.white};
    margin-bottom: 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;