import React from "react";
import * as S from "./styles";
import { MouseEvent, useState } from "react";
import { like, disLike } from "../../../../../assets";

const Recommend = ():JSX.Element => {
  const [onOffUpThumb, setOnOffUpThumb] = useState(false);
  const upThumb = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <S.Recommend>
      <S.CommentLike
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          upThumb(e);
          setOnOffUpThumb(!onOffUpThumb);
        }}
      >
        <S.LikeImg alt="like" src={like} />
        추천
      </S.CommentLike>
      <S.CommentDisLike>
        <S.DisLikeImg alt="dislike" src={disLike} />
        비추천
      </S.CommentDisLike>
    </S.Recommend>
  );
};

export default Recommend;