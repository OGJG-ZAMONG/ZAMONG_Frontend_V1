import * as S from "./styles";
import Recommend from "./Recommend/Recommend";
import ReplyComment from "./ReplyComment/ReplyComment";
import { more, profile } from "../../../../assets/index";
import { useEffect, useState } from "react";
import {
  Comment,
  postComment,
  responseReComment,
} from "../../../../utils/api/DreamDetail";

interface PropsType {
  comment: Comment;
  postUuid: string;
}

const CommentBox = ({ comment, postUuid }: PropsType): JSX.Element => {
  const [onOffToggle, setOnOffToggle] = useState(false);
  const [onOffAdd, setOnOffAdd] = useState(false);
  const [input, setInput] = useState("");
  const {
    uuid,
    content,
    date_time,
    dislike_count,
    user_profile,
    like_count,
    is_like,
    is_dis_like,
  } = comment;
  const [reComments, setReComments] = useState<Comment[]>([]);
  const reCommentCount = reComments.length;

  useEffect(() => {
    settingComment();
  }, []);

  const settingComment = async () => {
    setReComments(
      (await responseReComment(uuid)).data.content.response.comments
    );
  };

  const month = date_time.split("-")[1];
  const day = date_time.split("-")[2].slice(0, 2);
  const date = month + "월 " + day + "일";

  const setToggle = (value: boolean) => {
    setOnOffToggle(value);
  };

  const setAdd = (value: boolean) => {
    setOnOffAdd(value);
  };

  const commentChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInput(value);
  };

  const writeReComment = async () => {
    if (input.replace(/(\s*)/g, "") === "") {
      alert("공백은 입력하실 수 없습니다.");
      setInput("");
    } else {
      const data = {
        content: input,
        p_comment: uuid,
      };
      await postComment(postUuid, data);
      setInput("");
      setAdd(false);
      settingComment();
    }
  };

  return (
    <S.CommentBox>
      <S.CommentProfile>
        <img alt="profile" src={profile} />
      </S.CommentProfile>
      <S.CommnetRight>
        <S.CommentText>{content}</S.CommentText>
        <S.More alt="more" src={more} />
        <S.CommentBoxBottom>
          <S.DetailLeft>
            <ReplyComment
              setToggle={setToggle}
              setAdd={setAdd}
              listLength={reCommentCount}
            />
          </S.DetailLeft>
          <S.DetailRight>
            <Recommend />
            <S.CommentDate>{date}</S.CommentDate>
          </S.DetailRight>
        </S.CommentBoxBottom>
        <div></div>
        {onOffAdd && (
          <S.InputContainer>
            <S.CommentInput
              name="input"
              value={input}
              placeholder="덧글 쓰기..."
              onChange={commentChange}
            />
            <S.EnterButton onClick={writeReComment}>덧글 쓰기</S.EnterButton>
          </S.InputContainer>
        )}
        {onOffToggle && (
          <S.CommentToCommentContainer>
            <S.CommentToComment>
              {reComments.map((value, i) => {
                return (
                  <CommentBox postUuid={postUuid} comment={value} key={i} />
                );
              })}
            </S.CommentToComment>
          </S.CommentToCommentContainer>
        )}
      </S.CommnetRight>
    </S.CommentBox>
  );
};

export default CommentBox;
