import * as S from "./styles";
import { FC, useEffect, useState } from "react";
import { plus, toggle, minus } from "../../../../../assets";

interface Props {
  setToggle: (value: boolean) => void;
  setAdd: (value: boolean) => void;
}

const ReplyComment: FC<Props> = ({ setToggle, setAdd }): JSX.Element => {
  const [isActiveToggle, setIsActiveToggle] = useState(false);
  const [isComment, checkComment] = useState(false); // 서버에서 보내면 값 확인
  const [isActivePlus, setIsActivePlus] = useState(false);
  useEffect(() => {
    // checkComment(덧글의 개수);
  }, []);

  return (
    <>
      <S.CommentToggle
        onClick={() => {
          setIsActiveToggle(!isActiveToggle);
          setToggle(!isActiveToggle);
        }}
      >
        {isActiveToggle ? "덧글 접기" : "덧글 보기"}
        &nbsp;
        <S.ToggleImg
          alt="toggle"
          src={toggle}
          rotate={isActiveToggle ? 180 : 360}
        />
      </S.CommentToggle>
      <S.CommentPlus
        onClick={() => {
          setIsActivePlus(!isActivePlus);
          setAdd(!isActivePlus);
        }}
      >
        <S.PlusImg alt="plus" src={isActivePlus ? minus : plus} />
        {isActivePlus ? "덧글 취소" : "덧글 달기"}
      </S.CommentPlus>
    </>
  );
};

export default ReplyComment;
