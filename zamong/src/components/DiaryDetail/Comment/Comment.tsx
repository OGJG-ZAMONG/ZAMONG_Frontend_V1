import * as S from "./styles";
import CommentBox from "./CommentBox/CommentBox";
import { useEffect, useState } from "react";
import {
  postComment,
  responseComment,
  Comment,
} from "../../../utils/api/DreamDetail";

const DiaryDetail = (): JSX.Element => {
  const uuid = "78ca0578-03e8-4e8f-bf99-a98b268acb5b";
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    settingComment();
  }, []);

  const settingComment = async () => {
    setComments((await responseComment(uuid)).data.content.response.comments);
  };

  const comentChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setComment(value);
  };

  const writeComment = async () => {
    if( comment.replace(/(\s*)/g, "")  === "" ){
      alert("공백은 입력하실 수 없습니다.");
      setComment("");
    }
    else {
      const data = {
        content: comment,
        p_comment: null,
      };
      await postComment(uuid, data);
    }
  };

  return (
    <S.CommentContainer>
      <S.CommentTitle>
        Comment&nbsp;<S.CommentCount>{comments.length}</S.CommentCount>
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
        {comments.map((value) => {
          return <CommentBox comment={value} />;
        })}
      </S.CommentList>
    </S.CommentContainer>
  );
};

export default DiaryDetail;
