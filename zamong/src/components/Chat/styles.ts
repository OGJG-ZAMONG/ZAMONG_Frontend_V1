import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from '../../style/index';

//chat list
export const Container = styled.div`
    color: white;
    margin: 0 32px;
    padding-top: 5%;
`;

export const ChatListContainer = styled.div`
    width: 520px;
    height: 680px;
    display: flex;
    flex-direction: column;
`;

export const ChatList = styled.div``;


export const ChatInfoText = styled.div`
    height: 30px;
    font: ${font.headline3};
`;

export const SearchChatContainer = styled.div`
    width: 520px;
    height: 44px;
    display: flex;
`;

export const SearchIcon = styled.img`

`;

export const SearchChatContent = styled.input`
    width: 100%;
    text-decoration: none;
    outline: none;
    background: inherit;
    border: none;
    color: white;
`;

export const ChatRoom = styled.div`

`;

export const ListUserName = styled.div`

`;

export const LastConnection = styled.div`

`;

export const LastChat = styled.div`

`;

//chat view
export const ChatViewerContainer = styled.div`

`;

export const ChatTitle = styled.div``;

export const ViewUserName = styled.div``;

export const Report = styled.div``;

export const ViewLine = styled.div``;

export const OpponentText = styled.div``;

export const MyText = styled.div``;

export const SentTime = styled.div``;

export const ChatInput = styled.input``;

export const ChatSubmit = styled.div``;