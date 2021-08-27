import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "../../../style";

export const FilterContainer = styled.div`
    color: ${color.white};
    z-index: 3;
    img {
        margin-right: 8px;
    }
`;

export const FilterButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
`;

export const FilterInner = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterBox = styled.div`
    position: absolute;
    transform: translateY(22px);
    background-color: ${color.darkerGray};
    border-radius: 10px;
    box-sizing: border-box;
    width: 538px;
    height: 230px;
    display: flex;
`;

export const FilterSearchInput = styled.input`
    outline: none;
    color: ${color.white};
    border: none;
    font-size: 14px;
    background-color: ${color.darkGray};
    width: 100%;
    box-sizing: border-box;
    padding: 9px 14px;
    border-radius: 100px;
    &::placeholder{
        color: ${color.lightGray};
    }
`;


const FilterContentContainer = css`
    padding: 16px 12px;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
`;

export const FilterSearchContainer = styled.div`
    ${FilterContentContainer};

    &:after{
        content: "";
        display: inline-block;
        width: 1px;
        position: absolute;
        height: 205px;
        top: 12px;
        left: 50%;
        background-color: ${color.darkGray};
    }
`;


export const FilterAppliedContainer = styled.div`
    ${FilterContentContainer};
    
`;

export const TagsContainer = styled.div`
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    div{
        margin-right: 12px;
        margin-bottom: 12px;
    }
`;

export const AppliedTitle = styled.div`
    font-size: 16px;
    color: ${color.white};
`;

export const Tag = styled.div`
    font-size: 14px;
    font-weight: 300;
    color: ${color.white};
    padding: 4px 12px;
    background-color: ${color.darkGray};
    border-radius: 100px;
`;