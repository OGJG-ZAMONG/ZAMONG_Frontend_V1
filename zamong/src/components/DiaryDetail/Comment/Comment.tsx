import * as S from "./styles";
import CommentBox from "./CommentBox/CommentBox";

const data = [
  {
    upperNo: null,
    no: 0,
  },
  {
    upperNo: 0,
    no: 1,
  },
  {
    upperNo: 0,
    no: 2,
  },
  {
    upperNo: null,
    no: 3,
  },
  {
    upperNo: 3,
    no: 4,
  },
  {
    upperNo: null,
    no: 5,
  },
  {
    upperNo: 5,
    no: 6,
  },
  {
    upperNo: 6,
    no: 7,
  },
  {
    upperNo: 6,
    no: 8,
  },
  {
    upperNo: 6,
    no: 9,
  },
];

const DiaryDetail = (): JSX.Element => {
  const count = 0;
  return (
    <S.CommentContainer>
      <S.CommentTitle>
        Comment&nbsp;<S.CommentCount>{count}</S.CommentCount>
      </S.CommentTitle>
      <S.InputContainer>
        <S.CommentInput placeholder="댓글 쓰기..." />
        <S.EnterButton>댓글 쓰기</S.EnterButton>
      </S.InputContainer>
      <S.CommentList>
        {data.map((value) => {
          if (value.upperNo === null) {
            return <CommentBox commentList={data} curNo={value.no} />;
          }
        })}
      </S.CommentList>
    </S.CommentContainer>
  );
};

export default DiaryDetail;
