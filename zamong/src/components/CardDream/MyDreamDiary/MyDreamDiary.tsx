import * as S from "./styles";
import * as I from "../index";
import lockOpen from "../../../assets/icon/lockOpen.svg";
import { FC } from "react";

interface Props {
  img: string
  locked: boolean
  title: string
  date: string
  uuid: string
}

const MyDreamDiary: FC<Props> = ({uuid, img, locked, title, date}): JSX.Element => {
  return (
    <div key={uuid}>
      <I.DreamImageContainer img={img}>
        <S.LockIcon src={lockOpen} />
        <I.DiaryDate>{date}</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>
        {title}
      </I.DreamTitle>
    </div>
  );
};

export default MyDreamDiary;
