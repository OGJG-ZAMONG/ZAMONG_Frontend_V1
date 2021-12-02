import { useEffect, useState } from "react";
import { sellDetail } from "../../../models/dto/response/sellDreamDetailResponse";
import * as S from "./styles";

interface PropsType {
  postData: sellDetail;
  userUuid: string;
}

const Posting = ({ postData, userUuid }: PropsType) => {
  const { content, attachment_image, user } = postData;
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

  return (
    <S.PostingContainer>
      <S.PhotoGrid>
        {isImg ? <S.Photo src={attachment_image} /> : <></>}{" "}
      </S.PhotoGrid>
      <S.Text>{content}</S.Text>
      {userUuid !== user.uuid ? (
        <S.RequestChat>채팅 신청</S.RequestChat>
      ) : (
        <></>
      )}
    </S.PostingContainer>
  );
};

export default Posting;
