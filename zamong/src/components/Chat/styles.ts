import styled from "@emotion/styled";
import { font } from "../../style/font";

//chat list
export const Container = styled.div`
  height: 85vh;
  color: white;
  margin: 0 32px;
  padding-top: 5%;
  display: grid;
  grid-template-columns: 30% 10% 60%;
`;

export const ChatListContainer = styled.div`
  width: 520px;
  height: 680px;
  display: flex;
  flex-direction: column;
`;

export const ChatList = styled.div`
  display: grid;
  height: 100%;
  width: 522px;
  overflow: auto;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 12px;
`;

export const ChatInfoText = styled.div`
  height: 30px;
  font: ${font.headline3};
  margin-bottom: 14px;
  display: flex;
`;

export const ChatCount = styled.div`
  color: #0a84ff;
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

//Line
export const ChatLineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ChatLine = styled.div`
  height: 100%;
  background-color: #636366;
  border-radius: 15px;
  width: 2px;
  display: flex;
  justify-content: center;
`;

//chat view
export const ChatViewerContainer = styled.div`
  width: 100%;
  background-color: #2c2c2e;
  border-radius: 10px;
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
