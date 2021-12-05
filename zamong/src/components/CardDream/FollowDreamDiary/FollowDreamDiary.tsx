import * as S from "./styles";
import * as I from "../index";
import { Dream } from "../../../models/dto/response/shareDreamResponse";
import { followDream } from "../../../utils/api/Main";
import { useHistory } from "react-router";

interface PropsType {
  dream: followDream;
}

const FollowDreamDiary = ({ dream }: PropsType): JSX.Element => {
  const { default_posting_image, profile, title, created_at, uuid, user_uuid } = dream;
  const { push } = useHistory();

  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear()) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const onProfileClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    push(`/user/${user_uuid}`);
  };

  return (
    <I.DreamCardContainer to={`/diary/detail/${uuid}`}>
      <I.DreamImageContainer img={default_posting_image}>
        <S.UserImage src={profile} onClick={onProfileClick} />
        <I.DiaryDate>{dateToString(new Date(created_at))}</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>{title}</I.DreamTitle>
    </I.DreamCardContainer>
  );
};

export default FollowDreamDiary;
