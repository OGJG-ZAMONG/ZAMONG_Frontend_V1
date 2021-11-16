import * as S from "./styles";
import { useRef, useState } from "react";
import { like, disLike, lightLike, lightDisLike } from "../../../../../assets";
import { color } from "../../../../../style/color";
import { recommend } from "../../../../../utils/api/DreamDetail";

interface Props {
  isLike: boolean;
  isDisLike: boolean;
  likeCount: number;
  disLikeCount: number;
  uuid: string;
}

const Recommend = ({
  isLike,
  isDisLike,
  likeCount,
  disLikeCount,
  uuid,
}: Props): JSX.Element => {
  // const [onOffUpThumb, setOnOffUpThumb] = useState(isLike);
  // const [onOffDownThumb, setOnOffDownThumb] = useState(isDisLike);

  // const [upCount, setUpCount] = useState(likeCount);
  // const [downCount, setDownCount] = useState(disLikeCount);

  interface Thumb {
    likeCount: number;
    likeActive: boolean;
    dislikeCount: number;
    dislikeActive: boolean;
  }

  const [thumbs, setThumbs] = useState<Thumb>({
    likeCount: likeCount,
    likeActive: isLike,
    dislikeCount: disLikeCount,
    dislikeActive: isDisLike,
  });

  const {
    likeCount: likeNum,
    likeActive,
    dislikeActive,
    dislikeCount,
  } = thumbs;

  const LIKE = "like";
  const DISLIKE = "dislike";

  const onThumbAction = async (type: typeof LIKE | typeof DISLIKE) => {
    const opposition: typeof LIKE | typeof DISLIKE =
      type === LIKE ? DISLIKE : LIKE;

    const oppositionActive = thumbs[`${opposition}Active`];
    const supportActive = thumbs[`${type}Active`];

    const thumbCopy = { ...thumbs };
    thumbCopy[`${type}Active`] = !supportActive;

    if (oppositionActive) {
      thumbCopy[`${opposition}Active`] = false;      
      thumbCopy[`${opposition}Count`] = thumbCopy[`${opposition}Count`] - 1;
    }

    const offsetCount = supportActive ? -1 : 1;
    thumbCopy[`${type}Count`] = thumbCopy[`${type}Count`] + offsetCount;

    setThumbs(thumbCopy);

    const typeMap = new Map<typeof LIKE | typeof DISLIKE, string>()
      .set(LIKE, "LIKE")
      .set(DISLIKE, "DISLIKE");

    const isThumb = {
      type: typeMap.get(type)!,
    };

    try {      
      await recommend(uuid, isThumb);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Recommend>
      <S.CommentLike
        onClick={() => {
          onThumbAction("like");
        }}
        color={likeActive ? color.blue : color.gray}
      >
        <S.LikeImg alt="like" src={likeActive ? lightLike : like} />
        추천&nbsp;
        {likeNum}
      </S.CommentLike>
      <S.CommentDisLike
        onClick={() => {
          onThumbAction("dislike");
        }}
        color={dislikeActive ? color.red : color.gray}
      >
        <S.DisLikeImg
          alt="dislike"
          src={dislikeActive ? lightDisLike : disLike}
        />
        비추천&nbsp;
        {dislikeCount}
      </S.CommentDisLike>
    </S.Recommend>
  );
};

export default Recommend;
