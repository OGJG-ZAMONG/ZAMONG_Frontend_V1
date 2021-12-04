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
  userUUID: string;
}

const DiaryDetail = ({ postData, userUUID }: PropsType): JSX.Element => {
  const { uuid } = postData;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentCount, setCommentCount] = useState(0);
  const [canWrite, setCanWrite] = useState<boolean>(true);

  useEffect(() => {
    if (uuid !== "") {
      settingComment();
    }
  }, [uuid]);

  const settingComment = async () => {
    const count = await getCommentCount(uuid);
    setCommentCount(count.data.content.response.number);
    const list = (await responseComment(uuid)).data.content.response.comments;
    setComments([]);
    setComments(list);
  };

  const comentChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setComment(value);
  };

  const writeComment = async () => {
    if (!canWrite) {
      return;
    }

    setCanWrite(false);

    setTimeout(() => {
      setCanWrite(true);
    }, 3000);

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
        <S.EnterButton onClick={writeComment} disabled={!canWrite} >댓글 쓰기</S.EnterButton>
      </S.InputContainer>
      <S.CommentList>
        {comments.map((value, i) => {
          return (
            <CommentBox
              userUUID={userUUID}
              postUuid={uuid}
              comment={value}
              settingComment={settingComment}
              commentCount={commentCount}
              setCommentCount={setCommentCount}
              key={i}
            />
          );
        })}
      </S.CommentList>
    </S.CommentContainer>
  );
};

export default DiaryDetail;
