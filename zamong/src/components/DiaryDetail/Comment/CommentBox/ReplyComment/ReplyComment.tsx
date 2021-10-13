import * as S from "./styles";
import { FC, useEffect, useState } from "react";
import { plus, toggle } from "../../../../../assets";

interface Props {
  setToggle: any;
}

const ReplyComment: FC<Props> = ({ setToggle }): JSX.Element => {
  const [isActiveToggle, setIsActiveToggle] = useState(false);
  const [isComment, checkComment] = useState(true); // 서버에서 보내면 값 확인
  const [isActivePlus, setIsActivePlus] = useState(false);
  useEffect(() => {
    console.log("덧글의 개수");
    // checkComment(덧글의 개수);
  }, []);

  return (
    <>
      <S.CommentToggle
        onClick={() => {
          setIsActiveToggle(!isActiveToggle);
          setToggle(!isActiveToggle);
        }}
        display={isComment ? "flex" : "none"}
      >
        {isActiveToggle ? "덧글 접기" : "덧글 보기"}
        &nbsp;
        <S.ToggleImg
          alt="toggle"
          src={toggle}
          rotate={isActiveToggle ? 180 : 0}
        />
      </S.CommentToggle>
      <S.CommentPlus
        onClick={() => {
          setIsActivePlus(!isActivePlus);
        }}
      >
        <S.PlusImg alt="plus" src={plus} />
        덧글 달기
      </S.CommentPlus>
    </>
  );
};

export default ReplyComment;
