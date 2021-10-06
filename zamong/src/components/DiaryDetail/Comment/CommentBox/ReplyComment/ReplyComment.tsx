import * as S from "./styles";
import { FC, useState } from "react";
import { plus, toggle } from "../../../../../assets";

interface Props {
  setToggle: any
}

const ReplyComment:FC<Props> = ({setToggle}):JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <S.CommentToggle
        onClick={() => {
          setIsActive(!isActive);
          setToggle(!isActive);
        }}
      >
        {isActive ? "덧글 접기" : "덧글 보기"}
        &nbsp;
        <S.ToggleImg alt="toggle" src={toggle} rotate={isActive ? 180 : 0} />
      </S.CommentToggle>
      <S.CommentPlus>
        <S.PlusImg alt="plus" src={plus} />
        덧글 달기
      </S.CommentPlus>
    </>
  );
};

export default ReplyComment;
