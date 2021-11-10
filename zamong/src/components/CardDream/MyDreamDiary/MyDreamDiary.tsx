import * as S from "./styles";
import * as I from "../index";
import lockOpen from "../../../assets/icon/lockOpen.svg";
import lock from "../../../assets/icons/lock.svg";

import { Dream } from "../../../models/dto/response/shareDreamResponse";

interface PropsType {
  dream?: Dream;
}

const MyDreamDiary = ({ dream }: PropsType): JSX.Element => {
  const { created_at, default_posting_image, is_shared, title, uuid } = dream!;

  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear()) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };
import lockOpen from "../../../assets/icons/lockOpen.svg";
  return (
    <I.DreamCardContainer>
      <I.DreamImageContainer img={default_posting_image}>
        <S.LockIcon src={is_shared ? lockOpen : lock} />
        <I.DiaryDate>{dateToString(new Date(created_at))}</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>{title}</I.DreamTitle>
    </I.DreamCardContainer>
  );
};

export default MyDreamDiary;
