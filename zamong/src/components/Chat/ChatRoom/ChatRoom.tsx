import { FC } from "react";
import * as S from "./styles";

interface Props {
  ChatRoomName: string;
  UserName: string;
  LastConnection: string;
  LastChat: string;
}

const ChatRoom: FC<Props> = ({ChatRoomName, UserName, LastConnection, LastChat}): JSX.Element => {
  return (
    <S.ChatRoom>
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
