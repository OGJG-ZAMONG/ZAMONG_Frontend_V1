import * as S from "./styles";
import { InterpretationDetail } from "../../../models/dto/response/InterpretationDetail";
import { useEffect, useState } from "react";
import { defaultImageList } from "../../../constance/defaultImageList";

interface PropsTypes {
  postData: InterpretationDetail;
}

const InterpretationDetailPosting = ({ postData }: PropsTypes) => {
  const { content, attachment_image, user, uuid } = postData;
  const [isImg, setIsImg] = useState(false);

  useEffect(() => {
    setIsImg(!defaultImageList.some((value) => value === attachment_image));
  }, [postData]);

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
    </S.PostingContainer>
  );
};

export default InterpretationDetailPosting;
