import * as S from "./styles";
import { useEffect, useState } from "react";
import { plus, toggle, minus } from "../../../../../assets";

interface Props {
  setToggle: (value: boolean) => void;
  setAdd: (value: boolean) => void;
  listLength: number;
  isActivePlus: boolean;
  setIsActivePlus: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReplyComment = ({
  setToggle,
  setAdd,
  listLength,
  isActivePlus,
  setIsActivePlus,
}: Props): JSX.Element => {
  const [isToggle, setIsToggle] = useState(false);
  // const
  const [isActiveToggle, setIsActiveToggle] = useState(false);

  useEffect(() => {
    if (!listLength) {
      setIsToggle(false);
    } else if (listLength >= 1) {
      setIsToggle(true);
    }
  }, [listLength]);

  const clickAdd = () => {
    setIsActivePlus(!isActivePlus);
    setAdd(!isActivePlus);
  };

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
          clickAdd();
        }}
      >
        <S.PlusImg alt="plus" src={isActivePlus ? minus : plus} />
        {isActivePlus ? "덧글 취소" : "덧글 달기"}
      </S.CommentPlus>
    </>
  );
};

export default ReplyComment;
