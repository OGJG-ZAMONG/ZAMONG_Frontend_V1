import * as S from "./styles";
import CommentBox from "./CommentBox/CommentBox";
import { useEffect, useState } from "react";
import { postComment, responseComment } from "../../../utils/api/DreamDetail";

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
  //준서씨에게 받아올 uuid
  const uuid = "78ca0578-03e8-4e8f-bf99-a98b268acb5b";
  const count = 0;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState();

  useEffect(() => {
    setComments(responseComment(uuid))
    const data = responseComment(uuid);
  }, []);

  const comentChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setComment(value);
  };

  const writeComment = async () => {
    const data = {
      content: comment,
      p_comment: null,
    };
    await postComment(uuid, data);
  };

  return (
    <S.CommentContainer>
      <S.CommentTitle>
        Comment&nbsp;<S.CommentCount>{count}</S.CommentCount>
      </S.CommentTitle>
      <S.InputContainer>
        <S.CommentInput
          name="comment"
          value={comment}
          placeholder="댓글 쓰기..."
          onChange={comentChange}
        />
        <S.EnterButton onClick={writeComment}>댓글 쓰기</S.EnterButton>
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
