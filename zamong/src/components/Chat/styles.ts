import styled from "@emotion/styled";
import { font } from "../../style/font";

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

export const ChatList = styled.div`
    display: grid;
    height: 578px;
    width: 522px;
    overflow: auto;
    grid-template-rows: repeat(5, 1fr);
    row-gap: 12px;
`;

export const ChatRoom = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: #2C2C2E;
`;

export const ChatInfoText = styled.div`
  height: 30px;
  font: ${font.headline3};
  margin-bottom: 14px;
  display: flex;
`;

export const ChatCount = styled.div`
    color: #0A84FF;
`;

export const SearchChatContainer = styled.div`
  width: 520px;
  height: 44px;
  display: flex;
  margin-bottom: 12px;
`;

export const SearchChatContent = styled.input<{ imgSrc: string }>`
  width: 100%;
  height: 100%;
  outline: none;
  background-color: #2c2c2e;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 0 4%;

  &::-webkit-input-placeholder {
    background-image: url(${(props) => props.imgSrc});
    background-repeat: no-repeat;
    background-position: 0 center;
    background-size: 15px;
    padding: 3px 5%;
  }
`;


export const ListUserName = styled.div``;

export const LastConnection = styled.div``;

export const LastChat = styled.div``;

//chat view
export const ChatViewerContainer = styled.div``;

export const ChatTitle = styled.div``;

export const ViewUserName = styled.div``;

export const Report = styled.div``;

export const ViewLine = styled.div``;

export const OpponentText = styled.div``;

export const MyText = styled.div``;

export const SentTime = styled.div``;

export const ChatInput = styled.input``;

export const ChatSubmit = styled.div``;
