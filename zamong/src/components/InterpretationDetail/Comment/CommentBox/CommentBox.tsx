import * as S from "./styles";
import ReplyComment from "./ReplyComment/ReplyComment";
import { useHistory } from "react-router-dom";
import { more } from "../../../../assets/index";
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
import AdoptComment from "./AdoptComment/AdoptComment";
import { getCheckComment } from "../../../../utils/api/InterpretationDetail";
import { color } from "../../../../style/color";

interface PropsType {
  comment: Comment;
  postUUID: string;
  writerUUID: string;
  userUUID: string;
  is_interpretation: boolean;
  commentCount: number;
  setCommentCount: React.Dispatch<React.SetStateAction<number>>;
  settingComment: () => Promise<void>;
}

const CommentBox = ({
  comment,
  writerUUID,
  postUUID,
  userUUID,
  settingComment,
  is_interpretation,
  commentCount,
  setCommentCount,
}: PropsType): JSX.Element => {
  const { push } = useHistory();
  const [onOffToggle, setOnOffToggle] = useState(false);
  const [onOffAdd, setOnOffAdd] = useState(false);
  const [input, setInput] = useState("");
  const [isActivePlus, setIsActivePlus] = useState(false);
  const [isActiveMore, setIsActiveMore] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [hover, setHover] = useState(false);
  const text = useRef<HTMLTextAreaElement>(null);
  const {
    uuid,
    content,
    date_time,
    user_profile,
    user_id,
    is_checked,
    is_selected,
    user_uuid,
  } = comment;
  const [modifyContent, setModifyContent] = useState(content);
  const [reComments, setReComments] = useState<Comment[]>([]);
  const reCommentCount = reComments.length;
  const [canWrite, setCanWrite] = useState<boolean>(true);
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

  useEffect(() => {
    settingReComment();
  }, []);

  useEffect(() => {
    checkComment();
  }, [is_checked]);

  const settingReComment = async () => {
    setReComments([]);
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
    if (!canWrite) {
      return;
    }

    setCanWrite(false);

    setTimeout(() => {
      setCanWrite(true);
    }, 3000);

    if (input.replace(/(\s*)/g, "") === "") {
      alert("공백은 입력하실 수 없습니다.");
      setInput("");
    } else {
      try {
        if (isAnonymous) {
          const data = {
            content: input,
            p_comment: uuid,
            is_anonymous: true,
          };
          await postComment(postUUID, data);
        } else {
          const data = {
            content: input,
            p_comment: uuid,
          };
          await postComment(postUUID, data);
        }
        setInput("");
        setAdd(false);
        settingReComment();
        setCommentCount(commentCount + 1);
        alert("댓글이 입력되었습니다.");
        setIsActivePlus(false);
        setOnOffToggle(true);
      } catch (error) {
        console.log(error);
      }
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
    if (modifyContent.replaceAll(" ", "").length <= 0) {
      alert("최소 1글자를 입력하셔야 합니다.");
      return;
    }

    const data = {
      content: modifyContent,
    };

    try {
      const response = await modifyComment(uuid, data);
      setModifyContent(response.data.content.response.message);
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
        settingComment();
        alert("삭제되었습니다.");
        setOnOffToggle(true);
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

  const checkComment = async () => {
    if (userUUID === writerUUID) {
      try {
        await getCheckComment(uuid);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const linkProfile = () => {
    if (user_uuid) {
      push(`/user/${user_uuid}`);
    }
  };

  const setAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

  return (
    <S.CommentBox>
      <S.CommentProfile>
        <S.Profile
          alt="profile"
          src={user_profile}
          onClick={linkProfile}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        {hover && <S.UserName>{user_id}</S.UserName>}
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
        {user_uuid === userUUID ? (
          <>
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
          </>
        ) : (
          <div></div>
        )}
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
            {is_checked && userUUID !== writerUUID && <S.Check>확인됨</S.Check>}
            {userUUID === writerUUID ? (
              <AdoptComment
                postUUID={postUUID}
                uuid={uuid}
                comment={comment}
                is_interpretation={is_interpretation}
                settingComment={settingComment}
              />
            ) : (
              is_interpretation &&
              is_selected && (
                <AdoptComment
                  postUUID={postUUID}
                  uuid={uuid}
                  comment={comment}
                  is_interpretation={is_interpretation}
                  settingComment={settingComment}
                />
              )
            )}
            <S.CommentDate>{date}</S.CommentDate>
          </S.DetailRight>
        </S.CommentBoxBottom>
        <div></div>
        {onOffAdd && (
          <S.InputContainer>
            <S.InputInner>
              <S.CommentInput
                name="input"
                value={input}
                placeholder="덧글 쓰기..."
                onChange={commentChange}
                onKeyUp={keyUp}
              />
              <S.AnonymousButton
                onClick={setAnonymous}
                color={isAnonymous ? color.blue : color.gray}
              >
                익명 댓글
              </S.AnonymousButton>
            </S.InputInner>
            <S.EnterButton onClick={writeReComment} disabled={!canWrite}>
              덧글 쓰기
            </S.EnterButton>
          </S.InputContainer>
        )}
        {onOffToggle && (
          <S.CommentToCommentContainer>
            <S.CommentToComment>
              {reComments.map((value, i) => {
                return (
                  <CommentBox
                    writerUUID={writerUUID}
                    postUUID={postUUID}
                    comment={value}
                    commentCount={commentCount}
                    setCommentCount={setCommentCount}
                    settingComment={settingComment}
                    userUUID={userUUID}
                    is_interpretation={is_interpretation}
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
