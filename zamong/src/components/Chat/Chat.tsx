import { FC } from "react";
import * as S from "./styles";
import { search, editGrey, send } from "../../assets";
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
                ChatRoomName={"이 꿈 안사면 호구요"}
                UserName={"dsmhskr"}
                LastConnection={"8시간 전"}
                LastChat={"나: 아니 이 꿈이 1000원? 레전드로 가시는구나"}
                key={i}
              />
            );
          })}
        </S.ChatList>
      </S.ChatListContainer>
      <S.ChatLine />
      <S.ChatViewerContainer>
        <S.ChatViewHeader>
          <S.ChatTitle>이 꿈을 안산다면 당신은 호구. </S.ChatTitle>
          <S.HeaderNav>
            <S.UserReportBox>
              <S.ViewUserName>dsmhskr</S.ViewUserName>
              <span>ᆞ</span>
              <S.Report>신고하기</S.Report>
            </S.UserReportBox>
            <S.MannerTemperatureBox>
              <S.MannerTemperatureIMG src={editGrey} />
              <S.MannerTemperatureText>매너온도 매기기</S.MannerTemperatureText>
            </S.MannerTemperatureBox>
          </S.HeaderNav>
        </S.ChatViewHeader>
        <S.ChatBox>
          <S.OpponentTextContainer>
            <S.OpponentText>
              안녕하세요 ㅎㅎ, 꿈 판매 관련해서 여쭤보려구요
            </S.OpponentText>
          </S.OpponentTextContainer>
          
          <S.MyTextContainer>
            <S.MyText>아하 안 팔아요</S.MyText>
          </S.MyTextContainer>
          
        </S.ChatBox>
        <S.ChatInputBox>
          <S.ChatInput type="text" placeholder="내용을 입력하십시오." />
          <S.ChatSubmitIMG src={send} />
        </S.ChatInputBox>
      </S.ChatViewerContainer>
    </S.Container>
  );
};

export default Chat;
