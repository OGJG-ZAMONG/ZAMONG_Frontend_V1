import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";

export const ChatRoom = styled.div<{ background: string }>`
    padding: 16px;
    border-radius: 10px;
    background-color: ${color.darkerGray};
    background-color: ${props => props.background};
    font: ${font.subtitle};
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    cursor: pointer;
`;

export const ChatUserInfoBox = styled.div`
  display: flex;
  justify-content: left;
  font: ${font.description};
`;


export const LastChat = styled.div`
  font: ${font.body3};
`;