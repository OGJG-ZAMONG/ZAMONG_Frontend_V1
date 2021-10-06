import * as S from "./styles";
import CommentBox from "./CommentBox/CommentBox";

const DiaryDetail = (): JSX.Element => {
  const commentBox = [1, 2, 3];

  return (
    <S.CommentContainer>
      <S.CommentTitle>
        Comment&nbsp;<S.CommentCount>{commentBox.length}</S.CommentCount>
      </S.CommentTitle>
      <S.InputContainer>
        <S.CommentInput placeholder="댓글 쓰기..." />
        <S.EnterButton>댓글 쓰기</S.EnterButton>
      </S.InputContainer>
      <S.CommentList>
        {commentBox.map((_, i) => {
          return <CommentBox key={i} />;
        })}
      </S.CommentList>
    </S.CommentContainer>
  );
};

export default DiaryDetail;
