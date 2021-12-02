import * as S from "./styles";
import { InterpretationDetail } from "../../../models/dto/response/InterpretationDetail";
import { useEffect, useState } from "react";

interface PropsTypes {
  postData: InterpretationDetail;
}

const InterpretationDetailPosting = ({ postData }: PropsTypes) => {
  const { content, attachment_image, user, uuid } = postData;
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
        {isImg ? <S.Photo src={attachment_image} /> : <></>}
      </S.PhotoGrid>
      <S.Text>{content}</S.Text>
    </S.PostingContainer>
  );
};

export default InterpretationDetailPosting;
