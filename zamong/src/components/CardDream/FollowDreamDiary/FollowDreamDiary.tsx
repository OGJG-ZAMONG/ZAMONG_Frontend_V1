import { DefaultImage } from "../../../assets";
import * as S from "./Styles";
import * as I from "../index";

const FollowDreamDiary = (): JSX.Element => {
  return (
    <div>
      <I.DreamImageContainer img={DefaultImage}>
        <S.UserImage src={DefaultImage} />
        <I.DiaryDate>8월 15일</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
      </I.DreamTitle>
    </div>
  );
};

export default FollowDreamDiary;
