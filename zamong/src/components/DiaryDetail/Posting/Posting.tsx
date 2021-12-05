import { useEffect, useState } from "react";
import { OnRecommend, Recommend } from "../../../assets";
import { defaultImageList } from "../../../constance/defaultImageList";
import { dreamDetail } from "../../../models/dto/response/dreamDetailResponse";
import { requestPost } from "../../../utils/api/DreamDetail";
import * as S from "./styles";

interface PropsType {
  postData: dreamDetail;
  onLikeSet: () => void;
}

const DiaryDetailPosting = ({ postData, onLikeSet }: PropsType): JSX.Element => {
  const { uuid, content, lucy_count, attachment_image, is_shared, is_liked } = postData;
  const [isImg, setIsImg] = useState(false);

  useEffect(() => {
    setIsImg(!defaultImageList.some((value) => value === attachment_image));
  }, [postData]);

  const onLike = async () => {
    try {
      await requestPost(uuid);
      onLikeSet();
    } catch (error) {
      console.log(error);
    }
  };

  const already = () => {
    alert("이미 추천된 게시글입니다.");
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
      {is_shared ? (
        <S.Lucy>
          {is_liked ? (
            <S.LucyImg src={OnRecommend} onClick={already} />
          ) : (
            <S.LucyImg src={Recommend} onClick={onLike} />
          )}
          <div>{lucy_count} LUCY</div>
        </S.Lucy>
      ) : (
        <></>
      )}
    </S.PostingContainer>
  );
};

export default DiaryDetailPosting;
