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
  const testText1 = ["11111111111111111111111111111111111"];
  const [onOffToggle, setOnOffToggle] = useState(false);
  const setToggle = (value: boolean) => {
    setOnOffToggle(value);
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
            <ReplyComment setToggle={setToggle} />
          </S.DetailLeft>
          <S.DetailRight>
            <Recommend />
            <S.CommentDate>9월 29일</S.CommentDate>
          </S.DetailRight>
        </S.CommentBoxBottom>
        <S.InputContainer></S.InputContainer>
        <S.CommentToComment display={onOffToggle ? "block" : "none"}>
          {commentList.map((value) => {
            if (value.upperNo === curNo) {
              return <CommentBox commentList={commentList} curNo={value.no} />;
            }
          })}
        </S.CommentToComment>
      </S.CommnetRight>
    </S.CommentBox>
  );
};

export default CommentBox;
