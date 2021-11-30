import { useEffect, useState } from "react";
import { dreamDetail } from "../../../models/dto/response/dreamDetailResponse";
import * as S from "./styles";

interface PropsType {
  postData: dreamDetail;
}

const DiaryDetailPosting = ({ postData }: PropsType): JSX.Element => {
  const { content, lucy_count, attachment_image, user, is_shared } = postData;
  const [isImg, setIsImg] = useState(false);

  useEffect(() => {
    if (attachment_image !== "https://ogjg-zamong.s3.ap-northeast-1.amazonaws.com/default-posting-image/Rectangle+1.png"){
      setIsImg(true);
    } else {
      setIsImg(false);
    }
  }, [postData]);

  return (
    <S.PostingContainer>
      <S.PhotoGrid>
        {isImg ? <S.Photo src={attachment_image} /> : <></>
        }
      </S.PhotoGrid>
      <S.Text>{content}</S.Text>
      {is_shared ? (
        <S.Lucy>
          <S.LucyImg src={user.profile} />
          <div>{lucy_count} LUCY</div>
        </S.Lucy>
      ) : (
        <></>
      )}
    </S.PostingContainer>
  );
};

export default DiaryDetailPosting;
