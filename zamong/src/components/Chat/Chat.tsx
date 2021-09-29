import { FC } from "react";
import * as S from "./styles";
import { search } from "../../assets";

const Chat: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.ChatListContainer>
        <S.ChatInfoText>채팅 5개</S.ChatInfoText>
        <S.SearchChatContainer>
          <S.SearchIcon src={search}/>
          <S.SearchChatContent placeholder="검색할 내용을 입력하세요" type="text"/>
        </S.SearchChatContainer>
        <S.ChatList>
            <S.ChatRoom>
                
            </S.ChatRoom>
        </S.ChatList>
      </S.ChatListContainer>
      <S.ChatViewerContainer>


      </S.ChatViewerContainer>
    </S.Container>
  );
};

export default Chat;
