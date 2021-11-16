import * as S from "./styles";
import { FC, useEffect, useState } from "react";
import { plus, toggle, minus } from "../../../../../assets";

interface Props {
  setToggle: (value: boolean) => void;
  setAdd: (value: boolean) => void;
  listLength: number;
}

const ReplyComment: FC<Props> = ({
  setToggle,
  setAdd,
  listLength,
}): JSX.Element => {
  const [isToggle, setIsToggle] = useState(false);
  const [isActiveToggle, setIsActiveToggle] = useState(false);
  const [isActivePlus, setIsActivePlus] = useState(false);

  useEffect(() => {
    if (!listLength) {
      setIsToggle(false);
    } else if (listLength >= 1) {
      setIsToggle(true);
    }
  }, [listLength]);

  return (
    <>
      <S.CommentToggle
        onClick={() => {
          setIsActiveToggle(!isActiveToggle);
          setToggle(!isActiveToggle);
        }}
      >
        {isToggle && (
          <>
            {isActiveToggle ? "덧글 접기" : "덧글 보기"}
            &nbsp;
            <S.ToggleImg
              alt="toggle"
              src={toggle}
              rotate={isActiveToggle ? 180 : 360}
            />
          </>
        )}
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
