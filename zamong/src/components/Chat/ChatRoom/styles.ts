import styled from "@emotion/styled";
import { font } from "../../../style/font";

export const ChatRoom = styled.div`
    padding: 16px;
    height: 100px;
    border-radius: 10px;
    background-color: #2C2C2E;
    font: ${font.subtitle};
    display: grid;
    grid-template-rows: repeat(3, 1fr);
`;


export const ChatRoomName = styled.div`

`;

export const ChatUserInfoBox = styled.div`
  display: flex;
  justify-content: left;
  font: ${font.description};
`;

export const ListUserName = styled.div``;

export const LastConnection = styled.div``;

export const LastChat = styled.div`
  font: ${font.body3};
`;