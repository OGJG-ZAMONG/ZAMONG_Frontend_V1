import * as S from "./styles";
import * as I from "../index";
import { Locked, Unlocked } from "../../../assets";
import { FC } from "react";

interface Props {
  img: string;
  locked: boolean;
  title: string;
  date: string;
  uuid: string;
}

const MyDreamDiary: FC<Props> = ({ uuid, img, locked, title, date }): JSX.Element => {
  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear()) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <I.DreamCardContainer key={uuid} to={`/diary/detail/${uuid}`}>
      <I.DreamImageContainer img={img}>
        <S.LockIcon src={locked ? Unlocked : Locked} />
        <I.DiaryDate>{dateToString(new Date(date))}</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>{title}</I.DreamTitle>
    </I.DreamCardContainer>
  );
};

export default MyDreamDiary;
