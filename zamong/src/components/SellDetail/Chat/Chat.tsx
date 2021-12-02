import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { sellDetail } from "../../../models/dto/response/sellDreamDetailResponse";
import { delSellPost, getChatRequest } from "../../../utils/api/SellDetail";
import * as S from "./styles";

interface PropsType {
  postData: sellDetail;
  settingData: () => Promise<void>;
}

const Chat = ({ postData, settingData }: PropsType) => {
  const { push } = useHistory();
  const { uuid } = postData;
  const [chatList, setChatList] = useState([
    {
      uuid: "",
      user_uuid: "",
      id: "",
      profile: "",
      request_datetime: "",
    },
  ]);

  const getChatList = async () => {
    try {
      setChatList((await getChatRequest(uuid)).data.content.response.requests);
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
        await delSellPost(uuid);
        push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };



  return (
    <S.ChatListContainer>
      <S.SubTitle>채팅 요청</S.SubTitle>
      <S.ChatList>
        {chatList.map((value, i) => {
          return (
            <S.ChatBox key={i}>
              <S.UserInfo>
                <S.Profile src={value.profile} />
                <S.UserName>{value.id}</S.UserName>
              </S.UserInfo>
              {}
              <S.AcceptButton>수락</S.AcceptButton>
              <S.OnAcceptButton>수락함</S.OnAcceptButton>
            </S.ChatBox>
          );
        })}
      </S.ChatList>
      <S.ChatBottom>
        <S.Cancel onClick={deleteSell}>판매 취소</S.Cancel>
        <S.ShowList>채팅 보기</S.ShowList>
      </S.ChatBottom>
    </S.ChatListContainer>
  );
};

export default Chat;
