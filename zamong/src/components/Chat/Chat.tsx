import { FC } from "react";
import * as S from "./styles";
import { search } from "../../assets";
import ChatRoom from "./ChatRoom/ChatRoom";
const testArray: number[] = [];
for (let i = 0; i < 10; i++) {
  testArray.push(i);
}

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
          {testArray.map((i) => {
            return (
              <ChatRoom
                ChatRoomName={"이 꿈 진짜 사야해요, 2개에 1000원~!"}
                UserName={"dsmhskr"}
                LastConnection={"8시간 전"}
                LastChat={
                  "나: 아니 이게 1000원 이라구요?? 계좌번호 알려드릴께요"
                }
                key={i}
              />
            );
          })}
        </S.ChatList>
      </S.ChatListContainer>
      <S.ChatLineContainer>
        <S.ChatLine />
      </S.ChatLineContainer>
      <S.ChatViewerContainer></S.ChatViewerContainer>
    </S.Container>
  );
};

export default Chat;
