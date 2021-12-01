import { FC, Dispatch } from "react";
import * as S from "./styles";
import { color } from "../../../style/color";

interface Props {
  ChatRoomName: string;
  UserName: string;
  LastConnection: string;
  LastChat: string;
  Index: number;
  selectedRoom: number;
  setSelectedRoom: Dispatch<React.SetStateAction<number>>;
}

const ChatRoom: FC<Props> = ({
  ChatRoomName,
  UserName,
  LastConnection,
  LastChat,
  Index,
  selectedRoom,
  setSelectedRoom,
}): JSX.Element => {
  return (
    <S.ChatRoom
      background={
        Index === selectedRoom ? `${color.blue}` : `${color.darkerGray}`
      }
      onClick={() => setSelectedRoom(Index)}
    >
      <div>{ChatRoomName}</div>
      <S.ChatUserInfoBox>
        <div>{UserName}</div>
        <div>ᆞ</div>
        <div>{LastConnection}</div>
      </S.ChatUserInfoBox>
      <S.LastChat>{LastChat}</S.LastChat>
    </S.ChatRoom>
  );
};

export default ChatRoom;
