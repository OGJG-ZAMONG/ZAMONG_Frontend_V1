import * as S from "./styles";
import Recommend from "./Recommend/Recommend";
import ReplyComment from "./ReplyComment/ReplyComment";
import { more, profile } from "../../../../assets/index";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Comment,
  delComment,
  modifyComment,
  postComment,
  responseReComment,
} from "../../../../utils/api/DreamDetail";
import PopupMenu from "../../../PopupMenu/PopupMenu";
import PopupContent from "../../../../interface/PopupContent";

interface PropsType {
  comment: Comment;
  postUuid: string;
  settingComment: () => Promise<void>;
}

const CommentBox = ({
  comment,
  postUuid,
  settingComment,
}: PropsType): JSX.Element => {
  const [onOffToggle, setOnOffToggle] = useState(false);
  const [onOffAdd, setOnOffAdd] = useState(false);
  const [input, setInput] = useState("");
  const [isActivePlus, setIsActivePlus] = useState(false);
  const [isActiveMore, setIsActiveMore] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const text = useRef<HTMLTextAreaElement>(null);
  const {
    uuid,
    content,
    date_time,
    dislike_count,
    like_count,
    is_like,
    is_dis_like,
  } = comment;
  const [modifyContent, setModifyContent] = useState(content);
  const [reComments, setReComments] = useState<Comment[]>([]);
  const reCommentCount = reComments.length;

  useEffect(() => {
    settingReComment();
  }, []);

  const settingReComment = async () => {
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
      settingReComment();
      alert("댓글이 입력되었습니다.");
      setIsActivePlus(false);
    }
  };

  const keyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      writeReComment();
    }
  };

  useLayoutEffect(() => {
    if (isModify) {
      if (text.current !== null) text.current.focus();
    }
  }, [isModify]);

  const modify = async () => {
    const test = /^\s|\s$/;
    if (test.test(modifyContent)) {
      alert("최소 1글자를 입력하셔야 합니다.");
      return;
    }
    const data = {
      content: modifyContent,
    };
    console.log(data);
    try {
      await modifyComment(uuid, data);
      alert("수정하셨습니다.");
      setIsModify(!isModify);
    } catch (error) {
      console.log(error);
    }
  };

  const change = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setModifyContent(value);
  };

  const deleteComment = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await delComment(uuid);
        alert("삭제되었습니다.");
        settingComment();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const popupContents: PopupContent[] = [
    {
      name: "수정",
      callback: () => {
        setIsModify(!isModify);
      },
    },
    {
      name: "삭제",
      callback: () => {
        deleteComment();
      },
    },
  ];

  const popupClose: PopupContent[] = [
    {
      name: "수정 취소",
      callback: () => {
        setModifyContent(content);
        setIsModify(!isModify);
      },
    },
  ];

  return (
    <S.CommentBox>
      <S.CommentProfile>
        <img alt="profile" src={profile} />
      </S.CommentProfile>
      <S.CommnetRight>
        <S.ModifyBox>
          <S.CommentText
            name="modifyContent"
            value={modifyContent}
            ref={text}
            readOnly={!isModify}
            onChange={change}
          />
          {isModify ? (
            <S.ModifyButton onClick={modify}>수정</S.ModifyButton>
          ) : (
            <></>
          )}
        </S.ModifyBox>
        <S.MoreBox>
          <S.More
            alt="more"
            src={more}
            onClick={() => setIsActiveMore(!isActiveMore)}
          />
          <PopupMenu
            contents={isModify ? popupClose : popupContents}
            isActiveMore={isActiveMore}
            setIsActiveMore={setIsActiveMore}
          />
        </S.MoreBox>
        <S.CommentBoxBottom>
          <S.DetailLeft>
            <ReplyComment
              isActivePlus={isActivePlus}
              setIsActivePlus={setIsActivePlus}
              setToggle={setToggle}
              setAdd={setAdd}
              listLength={reCommentCount}
            />
          </S.DetailLeft>
          <S.DetailRight>
            <Recommend
              isLike={is_like}
              likeCount={like_count}
              isDisLike={is_dis_like}
              disLikeCount={dislike_count}
              uuid={uuid}
            />
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
              onKeyUp={keyUp}
            />
            <S.EnterButton onClick={writeReComment}>덧글 쓰기</S.EnterButton>
          </S.InputContainer>
        )}
        {onOffToggle && (
          <S.CommentToCommentContainer>
            <S.CommentToComment>
              {reComments.map((value, i) => {
                return (
                  <CommentBox
                    postUuid={postUuid}
                    comment={value}
                    settingComment={settingComment}
                    key={i}
                  />
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
