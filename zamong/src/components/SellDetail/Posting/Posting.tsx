import { useEffect, useState } from "react";
import { defaultImageList } from "../../../constance/defaultImageList";
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
    setIsImg(!defaultImageList.some((value) => value === attachment_image));
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
      <S.PhotoGrid>
        {isImg ? (
          <S.Photo src={attachment_image} />
        ) : (
          <S.DefaultImage src={attachment_image} alt="default image" />
        )}
      </S.PhotoGrid>
      <S.Text>
        {content.split("\n").map((line, index) => {
          return (
            <span key={index}>
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
