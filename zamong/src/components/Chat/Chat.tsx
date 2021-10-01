import { FC } from "react";
import * as S from "./styles";
import { search } from "../../assets";

const Chat: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.ChatListContainer>
        <S.ChatInfoText>
            <span>채팅&nbsp;</span>
          <S.ChatCount>5개</S.ChatCount>
        </S.ChatInfoText>
        <S.SearchChatContainer>
          <S.SearchChatContent
            placeholder="검색할 내용을 입력하세요"
            type="text"
            imgSrc={search}
          />
        </S.SearchChatContainer>
        <S.ChatList>
          <S.ChatRoom></S.ChatRoom>
          <S.ChatRoom></S.ChatRoom>
          <S.ChatRoom></S.ChatRoom>
          <S.ChatRoom></S.ChatRoom>
          <S.ChatRoom></S.ChatRoom>
        </S.ChatList>
      </S.ChatListContainer>
      <S.ChatViewerContainer></S.ChatViewerContainer>
    </S.Container>
  );
};

export default Chat;
