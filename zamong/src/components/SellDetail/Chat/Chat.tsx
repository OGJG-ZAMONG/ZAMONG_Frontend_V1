import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { chatResponse } from "../../../models/dto/response/sellDreamDetailResponse";
import { delSellPost, getChatRequest, postAcceptChat } from "../../../utils/api/SellDetail";
import * as S from "./styles";

interface PropsType {
  postData: chatResponse;
  settingData: () => Promise<void>;
}

const Chat = ({ postData, settingData }: PropsType) => {
  const { push } = useHistory();
  const { uuid: postUUID } = postData;
  const [chatList, setChatList] = useState([
    {
      uuid: "",
      user_uuid: "",
      id: "",
      profile: "",
      request_datetime: "",
      is_accept: false,
    },
  ]);

  const getChatList = async () => {
    try {
      setChatList((await getChatRequest(postUUID)).data.content.response.requests);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChatList();
  }, [postData]);

  useEffect(() => {
    console.log(chatList);
  }, [chatList]);

  const deleteSell = async () => {
    if (window.confirm("판매를 취소하시겠습니까?")) {
      try {
        await delSellPost(postUUID);
        push("/sell");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const acceptChat = async (uuid: string) => {
    try {
      await postAcceptChat(uuid);
      settingData();
    } catch (error) {
      console.log(error);
    }
  };

  const linkProfile = (uuid:string) => {
    push(`/user/${uuid}`);
  };

  return (
    <S.ChatListContainer>
      <S.SubTitle>채팅 요청</S.SubTitle>
      {chatList.length > 0 ? (
        <>
          <S.ChatList>
            {chatList.map((value, i) => {
              return (
                <div>
                  <S.ChatBox key={i}>
                    <S.UserInfo>
                      <S.Profile src={value.profile} onClick={() => linkProfile(value.user_uuid)}/>
                      <S.UserName>{value.id}</S.UserName>
                    </S.UserInfo>
                    {value.is_accept ? (
                      <S.OnAcceptButton>수락함</S.OnAcceptButton>
                    ) : (
                      <S.AcceptButton onClick={() => acceptChat(value.uuid)}>수락</S.AcceptButton>
                    )}
                  </S.ChatBox>
                  <S.Line />
                </div>
              );
            })}
          </S.ChatList>
          <S.ChatBottom>
            <S.Cancel onClick={deleteSell}>판매 취소</S.Cancel>
          </S.ChatBottom>
        </>
      ) : (
        <S.NoneList>채팅이 존재하지 않습니다.</S.NoneList>
      )}
    </S.ChatListContainer>
  );
};

export default Chat;
