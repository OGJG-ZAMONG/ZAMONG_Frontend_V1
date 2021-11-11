import * as S from "./styles";
import Recommend from "./Recommend/Recommend";
import ReplyComment from "./ReplyComment/ReplyComment";
import { more, profile } from "../../../../assets/index";
import { useState } from "react";
import { postComment } from "../../../../utils/api/DreamDetail";

type ComType = {
  upperNo: number | null;
  no: number;
};

type PropsType = {
  curNo: number;
  commentList: Array<ComType>;
};

const CommentBox = ({ curNo, commentList }: PropsType): JSX.Element => {
  const testText1 = [
    "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세. 무궁화 삼천리 화려강산. 대한사람 대한으로 길이 보전하세.",
  ];
  const [onOffToggle, setOnOffToggle] = useState(false);
  const [onOffAdd, setOnOffAdd] = useState(false);
  const [comment, setComment] = useState("");
  
  const setToggle = (value: boolean) => {
    setOnOffToggle(value);
  };

  const setAdd = (value: boolean) => {
    setOnOffAdd(value);
  };

  const getRootCommentNumber = (
    no: number,
    upperNo: number | null
  ): number | null => {
    if (upperNo === null) {
      return no;
    }
    commentList.forEach((item) => {
      if (item.no === upperNo) {
        getRootCommentNumber(item.no, item.upperNo);
      }
    });
    return null;
  };

  const commentChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setComment(value);
  };

  const writeReComment = async () => {
    const data = {
      content: comment,
      p_comment: null,
    };
    //준서씨에게 받아올 uuid
    const uuid = "78ca0578-03e8-4e8f-bf99-a98b268acb5b";
    await postComment(uuid, data);
  };

  return (
    <S.CommentBox>
      <S.CommentProfile>
        <img alt="profile" src={profile} />
      </S.CommentProfile>
      <S.CommnetRight>
        <S.CommentText>{testText1}</S.CommentText>
        <S.More alt="more" src={more} />
        <S.CommentBoxBottom>
          <S.DetailLeft>
            <ReplyComment setToggle={setToggle} setAdd={setAdd} />
          </S.DetailLeft>
          <S.DetailRight>
            <Recommend />
            <S.CommentDate>9월 29일</S.CommentDate>
          </S.DetailRight>
        </S.CommentBoxBottom>
        <div></div>
        {onOffAdd && (
          <S.InputContainer>
            <S.CommentInput name="comment" value={comment} placeholder="덧글 쓰기..." onChange={commentChange}/>
            <S.EnterButton onClick={writeReComment}>덧글 쓰기</S.EnterButton>
          </S.InputContainer>
        )}
        {onOffToggle && (
          <S.CommentToCommentContainer>
            <S.CommentToComment>
              {commentList.map((value) => {
                if (value.upperNo === curNo) {
                  return (
                    <CommentBox commentList={commentList} curNo={value.no} />
                  );
                }
              })}
            </S.CommentToComment>
          </S.CommentToCommentContainer>
        )}
      </S.CommnetRight>
    </S.CommentBox>
  );
};

export default CommentBox;
