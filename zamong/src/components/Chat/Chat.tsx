import { FC, useEffect, useState, useRef } from "react";
import { search, editGrey, send } from "../../assets";
import * as StompJs from "@stomp/stompjs";
import { getChatRooms, getChat } from "../../utils/api/Chat";
import { getMyProfile } from "../../utils/api/Profile";
import { Rooms, Chats } from "../../interface/Chat";
import * as S from "./styles";
import ChatRoom from "./ChatRoom/ChatRoom";
import MyText from "./ChatBalloon/My/MyText";
import OpponentText from "./ChatBalloon/Opponent/OpponentText";
import SockJs from "sockjs-client";

const baseURL = "https://api.zamong.org/v1/api";
const Socket = new SockJs(`${baseURL}/ws`);
const stompClient = StompJs.Stomp.over(Socket);

const Chat: FC = (): JSX.Element => {
  const [rooms, setRooms] = useState<Rooms[]>([]);
  const [roomId, setRoomId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<number>(0);
  const [chats, setChats] = useState<any>([]);
  const inputValue = useRef<HTMLInputElement | any>(null);

  useEffect(() => {
    if(stompClient.connected === false) {
      connect();
    }
    getMyProfile()
      .then((res) => {
        setUserId(res.data.content.response.uuid);
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      getChatRooms()
        .then((res) => {
          setRooms(res.data.content.response.rooms);
          connectSocket(res.data.content.response.rooms[selectedRoom].uuid);
        })
        .catch((err) => console.log(err));
    }, 350);

  }, []);

  useEffect(() => {
    getChatRooms()
      .then((res) => {
        setRoomId(res.data.content.response.rooms[selectedRoom].uuid);
        connectSocket(res.data.content.response.rooms[selectedRoom].uuid);
      })
      .catch((err) => console.log(err));
  }, [selectedRoom]);

  useEffect(() => {
    getChat(roomId)
      .then((res) => {
        setChats(res.data.content.response.chats);
      })
      .catch((err) => console.log(err));
  }, [roomId]);

  const connectSocket = (uuid: string) => {
    stompClient.unsubscribe("socket");
    if (stompClient.connected === undefined) {
      // window.location.reload();
      connect();
    }

    stompClient.subscribe(
      "/topic/" + uuid,
      (message) => {
        setChats((chats: any) => [JSON.parse(message.body), ...chats]);
      },
      { id: "socket" }
    );
  };

  const sendMessage = async () => {
    if (inputValue.current.value === "") return;
    setSelectedRoom(0);
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
  };

  const enterKey = (e: any) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  const disconnect = () => {
    if (stompClient != null) {
      stompClient.disconnect();
    }
  };

  const connect = async () => {
    await stompClient.activate();
  }

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
            type="textarea"
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
