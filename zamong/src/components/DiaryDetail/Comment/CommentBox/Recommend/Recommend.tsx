import * as S from "./styles";
import { MouseEvent, useState } from "react";
import { like, disLike, lightLike, lightDisLike } from "../../../../../assets";
import { color } from "../../../../../style/color";

const Recommend = (): JSX.Element => {
  const [onOffUpThumb, setOnOffUpThumb] = useState(false);
  const [upCount, setUpCount] = useState(0);
  const [onOffDownThumb, setOnOffDownThumb] = useState(false);
  const [downCount, setDownCount] = useState(0);

  const upThumb = () => {
    if (!onOffUpThumb) {
      setUpCount(upCount + 1);
    } else {
      setUpCount(upCount - 1);
    }
  };
  const downThumb = () => {
    if (!onOffDownThumb) {
      setDownCount(downCount + 1);
    } else {
      setDownCount(downCount - 1);
    }
  };

  return (
    <S.Recommend>
      <S.CommentLike
        onClick={() => {
          setOnOffUpThumb(!onOffUpThumb);
          upThumb();
        }}
        color={onOffUpThumb ? color.blue : color.gray}
      >
        <S.LikeImg alt="like" src={onOffUpThumb ? lightLike : like} />
        추천&nbsp;
        {upCount}
      </S.CommentLike>
      <S.CommentDisLike
        onClick={() => {
          setOnOffDownThumb(!onOffDownThumb);
          downThumb();
        }}
        color={onOffDownThumb ? color.red : color.gray}
      >
        <S.DisLikeImg alt="dislike" src={onOffDownThumb ? lightDisLike: disLike} />
        비추천&nbsp;
        {downCount}
      </S.CommentDisLike>
    </S.Recommend>
  );
};

export default Recommend;
