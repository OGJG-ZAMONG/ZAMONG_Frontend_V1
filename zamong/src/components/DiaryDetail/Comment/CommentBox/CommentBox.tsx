import * as S from "./styles";
import Recommend from "./Recommend/Recommend";
import ReplyComment from "./ReplyComment/ReplyComment";
import { more, profile } from "../../../../assets/index";
import { useState } from "react";
const CommentBox = (): JSX.Element => {
  const testText1 = ["11111111111111111111111"];
  const [onOffToggle, setOnOffToggle] = useState(false);
  const commentToComment = [1, 2];
  const setToggle = (value: boolean) => {
    setOnOffToggle(value);
    console.log();
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
        <S.CommentToComment display={onOffToggle ? "block" : "none"}>
          {commentToComment.map((_, i) => {
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
                </S.CommnetRight>
              </S.CommentBox>
            );
          })}
        </S.CommentToComment>
      </S.CommnetRight>
    </S.CommentBox>
  );
};

export default CommentBox;
