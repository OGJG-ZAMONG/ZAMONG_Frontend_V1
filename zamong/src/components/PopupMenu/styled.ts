import styled from "@emotion/styled";
import { color } from "../../style/color";

export const PopupBox = styled.div`
  position: absolute;
  color: white;
  top: calc(50% + 12px);
`;

export const PopupList = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${color.darkerGray};
  padding: 8px 28px;
  :hover {
    background-color: ${color.hoverBlack};
  }
  :first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  :last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
