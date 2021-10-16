import defaultImage from "../../../assets/DefaultPostingImages/1.jpg";
import * as S from "./styles";
import * as I from "../index";

const FollowDreamDiary = (): JSX.Element => {
  return (
    <div>
      <I.DreamImageContainer img={defaultImage}>
        <S.UserImage src={defaultImage} />
        <I.DiaryDate>8월 15일</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
      </I.DreamTitle>
    </div>
  );
};

export default FollowDreamDiary;
