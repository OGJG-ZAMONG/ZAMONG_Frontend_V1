import { FC, useEffect, useState, useRef, KeyboardEventHandler } from "react";
import { search, editGrey, send } from "../../assets";
import { Stomp } from "@stomp/stompjs";
import { getChatRooms, getChat } from "../../utils/api/Chat";
import { getMyProfile } from "../../utils/api/Profile"
import { Rooms, Chats } from "../../interface/Chat";
import * as S from "./styles";
import ChatRoom from "./ChatRoom/ChatRoom";
import MyText from "./ChatBalloon/My/MyText";
import OpponentText from "./ChatBalloon/Opponent/OpponentText";
import SockJs from "sockjs-client";

const baseURL = "https://api.zamong.org/v1/api";
const Socket = new SockJs(`${baseURL}/ws`);
const stompClient = Stomp.over(Socket);

const Chat: FC = (): JSX.Element => {
  const [rooms, setRooms] = useState<Rooms[]>([]);
  const [roomId, setRoomId] = useState<Chats>();
  const [userId, setUserId] = useState<string>();
  const [selectedRoom, setSelectedRoom] = useState<number>(0);
  const [chats, setChats] = useState<Chats[]>([]);
  const inputValue = useRef<HTMLInputElement | any>(null);

  stompClient.connect({}, (frame: any) => {
    console.log(`status: ${frame}`);
  });

  useEffect(() => {
    getMyProfile()
      .then(res => {
        setUserId(res.data.content.response.uuid);
      });
    getChatRooms()
      .then((res) => {
        setRooms(res.data.content.response.rooms);
        setRoomId(res.data.content.response.rooms[selectedRoom].uuid);
        getChat(res.data.content.response.rooms[selectedRoom].uuid).then(
          (res) => {
            setChats(res.data.content.response.chats);
          }
        );
        stompClient.subscribe(
          "/topic/" + res.data.content.response.rooms[selectedRoom].uuid,
          (message) => {
            getChat(res.data.content.response.rooms[selectedRoom].uuid).then(
              (res) => {
                setChats(res.data.content.response.chats);
              }
            );
          }
        );
      })
      .catch((err) => console.log(err));
  }, [selectedRoom]);

  const sendMessage = async () => {
    if (inputValue.current.value === "") return;
    else {
      stompClient.send(
        "/app/chat.send",
        {},
        JSON.stringify({
          chat: inputValue.current?.value,
          room: roomId,
          from: userId,
        })
      );
      inputValue.current.value = "";
    }
  };

  const enterKey = (e: any) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  return (
    <S.Container>
      <S.ChatListContainer>
        <S.ChatInfoText>
          <span>채팅&nbsp;</span>
          <S.ChatCount>{rooms.length}개</S.ChatCount>
        </S.ChatInfoText>
        <S.SearchChatContainer>
          <S.SearchChatContent
            placeholder="검색할 내용을 입력하세요"
            type="text"
            imgSrc={search}
          />
        </S.SearchChatContainer>
        <S.ChatList>
          {rooms.map((value: any, index: number) => {
            return (
              <ChatRoom
                ChatRoomName={value.title}
                UserName={"dsmhskr"}
                LastConnection={"8시간 전"}
                LastChat={"나: 아니 이 꿈이 1000원? 레전드로 가시는구나"}
                key={value.uuid}
                Index={index}
                selectedRoom={selectedRoom}
                setSelectedRoom={setSelectedRoom}
              />
            );
          })}
        </S.ChatList>
      </S.ChatListContainer>
      <S.ChatLine />
      <S.ChatViewerContainer>
        <S.ChatViewHeader>
          <S.ChatTitle>{rooms[selectedRoom]?.title}</S.ChatTitle>
          <S.HeaderNav>
            <S.UserReportBox>
              <S.ViewUserName>
                {rooms[selectedRoom]?.last_chat.user.id}
              </S.ViewUserName>
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
          {chats.map((value: any, index: number) => {
            return value.its_me === true ? (
              <MyText message={value.chat} key={index} />
            ) : (
              <OpponentText message={value.chat} key={index} />
            );
          })}
        </S.ChatBox>
        <S.ChatInputBox>
          <S.ChatInput
            type="text"
            placeholder="내용을 입력하십시오."
            ref={inputValue}
            onKeyUp={(e) => enterKey(e)}
          />
          <S.ChatSubmitIMG src={send} onClick={sendMessage} />
        </S.ChatInputBox>
      </S.ChatViewerContainer>
    </S.Container>
  );
};

export default Chat;
