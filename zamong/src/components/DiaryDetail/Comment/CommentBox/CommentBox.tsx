import * as S from "./styles";
import Recommend from "./Recommend/Recommend";
import ReplyComment from "./ReplyComment/ReplyComment";
import { more, profile } from "../../../../assets/index";
import { useState } from "react";

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
            <S.CommentInput placeholder="덧글 쓰기..." />
            <S.EnterButton >덧글 쓰기</S.EnterButton>
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
