import { FC } from "react";
import * as S from "./styles";
import { search, editGrey, send } from "../../assets";
import ChatRoom from "./ChatRoom/ChatRoom";
import MyText from "./ChatBalloon/My/MyText";
import OpponentText from "./ChatBalloon/Opponent/OpponentText";

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
          <S.ChatTitle>이 꿈을 안산다면 당신은 호구</S.ChatTitle>
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
          <MyText message={"안녕하세요 꿈 구매하고 싶은데요..."} />
          <OpponentText message={"아하 그러시구나"} />
          <OpponentText message={"1000원에 팔께요 ^^"} />
          <MyText
            message={"너무 비싼 것 같아요 조금만 할인해주시면 안될까요?"}
          />
          <OpponentText message={"좋은 하루 보내세요"} />
          <MyText message={"ㅎㅎㅎㅎㅎ 넵"} />
          <MyText message={"ㅎㅎㅎㅎㅎ 넵"} />
          <OpponentText message={"좋은 하루 보내세요"} />
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
