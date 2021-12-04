import { useEffect, useState } from "react";
import { chatResponse } from "../../../models/dto/response/sellDreamDetailResponse";
import { requestChat } from "../../../utils/api/SellDetail";
import * as S from "./styles";

interface PropsType {
  postData: chatResponse;
  userUuid: string;
  settingData: () => Promise<void>;
}

const Posting = ({ postData, userUuid, settingData }: PropsType) => {
  const { content, attachment_image, user, uuid, request_status } = postData;
  const [isImg, setIsImg] = useState(false);

  useEffect(() => {
    if (
      attachment_image !==
      "https://ogjg-zamong.s3.ap-northeast-1.amazonaws.com/default-posting-image/Rectangle+1.png"
    ) {
      setIsImg(true);
    } else {
      setIsImg(false);
    }
  }, [postData]);

  const sendRequest = async () => {
    try {
      await requestChat(uuid);
      settingData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.PostingContainer>
      <S.PhotoGrid>{isImg ? <S.Photo src={attachment_image} /> : <></>} </S.PhotoGrid>
      <S.Text>
        {content.split("\n").map((line) => {
          return (
            <span>
              {line}
              <br />
            </span>
          );
        })}
      </S.Text>
      {userUuid !== user.uuid ? (
        <>
          {request_status.is_requesting ? (
            <S.RequestingChat>신청됨</S.RequestingChat>
          ) : (
            <S.RequestChat onClick={sendRequest}>채팅 신청</S.RequestChat>
          )}
        </>
      ) : (
        <></>
      )}
    </S.PostingContainer>
  );
};

export default Posting;
