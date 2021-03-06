import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "../../../../style/color";
import { font } from "../../../../style/font";

export const FilterBox = styled.div`
  position: absolute;
  transform: translateY(22px);
  background-color: ${color.darkerGray};
  border-radius: 10px;
  box-sizing: border-box;
  width: 538px;
  height: 230px;
  display: flex;
  box-shadow: 0px 0px 10px ${color.black};
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
  &::placeholder {
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

  &:after {
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
  div {
    margin-right: 12px;
    margin-bottom: 12px;
  }
`;

export const AppliedTitle = styled.div`
  font: ${font.body3};
  color: ${color.white};
`;

export const TagConatiner = styled.div`
  position: relative;
  margin: 0 !important;
  cursor: pointer;
`;
