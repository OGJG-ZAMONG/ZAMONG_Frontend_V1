import * as S from "./styles";
import * as I from "../index";
import { Dream } from "../../../models/dto/response/shareDreamResponse";

interface PropsType {
  dream: Dream;
}

const FollowDreamDiary = ({ dream }: PropsType): JSX.Element => {
  const { default_posting_image, profile, title, created_at, uuid } = dream;

  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear()) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <I.DreamCardContainer to={`/diary/detail/${uuid}`}>
      <I.DreamImageContainer img={default_posting_image}>
        <S.UserImage src={profile} />
        <I.DiaryDate>{dateToString(new Date(created_at))}</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>{title}</I.DreamTitle>
    </I.DreamCardContainer>
  );
};

export default FollowDreamDiary;
