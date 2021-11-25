import * as S from "./styles";
import CommentBox from "./CommentBox/CommentBox";
import { useEffect, useState } from "react";
import {
  postComment,
  responseComment,
  Comment,
  getCommentCount,
} from "../../../utils/api/DreamDetail";
import { dreamDetail } from "../../../models/dto/response/dreamDetailResponse";

interface PropsType {
  postData: dreamDetail;
}

const DiaryDetail = ({ postData }: PropsType): JSX.Element => {
  const { uuid } = postData;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentCount,setCommentCount] = useState(0);

  useEffect(() => {
    if(uuid!==""){
      settingComment();
      
    }
  }, [uuid]);

  const settingComment = async () => {
    const count = await getCommentCount(uuid);
    setCommentCount(count.data.content.response.number);
    setComments((await responseComment(uuid)).data.content.response.comments);
  };

  const comentChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setComment(value);
  };

  const writeComment = async () => {
    if (comment.replace(/(\s*)/g, "") === "") {
      alert("공백은 입력하실 수 없습니다.");
      setComment("");
    } else {
      const data = {
        content: comment,
        p_comment: null,
      };
      await postComment(uuid, data);
      setComment("");
      settingComment();
      alert("댓글이 입력되었습니다.");
    }
  };

  const keyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      writeComment();
    }
  };

  return (
    <S.CommentContainer>
      <S.CommentTitle>
        Comment&nbsp;<S.CommentCount>{commentCount}</S.CommentCount>
      </S.CommentTitle>
      <S.InputContainer>
        <S.CommentInput
          name="comment"
          value={comment}
          placeholder="댓글 쓰기..."
          onChange={comentChange}
          onKeyUp={keyUp}
        />
        <S.EnterButton onClick={writeComment}>댓글 쓰기</S.EnterButton>
      </S.InputContainer>
      <S.CommentList>
        {comments.map((value, i) => {
          return <CommentBox postUuid={uuid} comment={value} key={i} />;
        })}
      </S.CommentList>
    </S.CommentContainer>
  );
};

export default DiaryDetail;
