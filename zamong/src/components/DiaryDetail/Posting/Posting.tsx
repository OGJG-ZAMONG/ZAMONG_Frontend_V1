import { dreamDetail } from "../../../models/dto/response/dreamDetailResponse";
import * as S from "./styles";

interface PropsType {
  postData: dreamDetail;
}

const DiaryDetailPosting = ({ postData }: PropsType): JSX.Element => {
  const { content, lucy_count, attachment_image, user, is_shared } = postData;

  return (
    <S.PostingContainer>
      <S.PhotoGrid>
        <S.Photo src={attachment_image} />
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
