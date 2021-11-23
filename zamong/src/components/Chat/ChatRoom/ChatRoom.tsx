import { FC } from "react";
import * as S from "./styles";
import { color } from '../../../style/color';

interface Props {
  ChatRoomName: string;
  UserName: string;
  LastConnection: string;
  LastChat: string;
  Index : number;
  selectedRoom : number;
  setSelectedRoom : any;
}

const ChatRoom: FC<Props> = ({ChatRoomName, UserName, LastConnection, LastChat, Index, selectedRoom, setSelectedRoom}): JSX.Element => {
  return (
    <S.ChatRoom background={Index === selectedRoom ? `${color.blue}` : `${color.darkerGray}`} onClick={() => setSelectedRoom(Index)}>
      <S.ChatRoomName>
          {ChatRoomName}
      </S.ChatRoomName>
      <S.ChatUserInfoBox>
        <S.ListUserName>{UserName}</S.ListUserName>
        <span>ᆞ</span>
        <S.LastConnection>{LastConnection}</S.LastConnection>
      </S.ChatUserInfoBox>
      <S.LastChat>{LastChat}</S.LastChat>
    </S.ChatRoom>
  );
};

export default ChatRoom;
