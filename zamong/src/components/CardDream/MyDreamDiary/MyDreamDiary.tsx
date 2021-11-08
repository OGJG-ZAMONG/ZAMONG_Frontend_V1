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

const MyDreamDiary: FC<Props> = ({
  uuid,
  img,
  locked,
  title,
  date,
}): JSX.Element => {
  const RDate = date.substring(0, 10).split("-");
  const Day =
    Number(RDate[2].split("")[0]) * 10 + Number(RDate[2].split("")[1]);
  return (
    <div key={uuid}>
      <I.DreamImageContainer img={img}>
        <S.LockIcon src={locked ? Unlocked : Locked} />
        <I.DiaryDate>{`${RDate[0]}년 ${RDate[1]}월 ${Day}일`}</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>{title}</I.DreamTitle>
    </div>
  );
};

export default MyDreamDiary;
