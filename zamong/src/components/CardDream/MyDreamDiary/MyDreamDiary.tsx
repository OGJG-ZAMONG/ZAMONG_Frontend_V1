import * as S from "./styles";
import * as I from "../index";
import { DefaultImage } from "../../../assets/index";
import lockOpen from "../../../assets/icon/lockOpen.svg";
import { FC } from "react";

interface Props {
  img: string
  locked: boolean
  title: string
  date: string
  uuid: string
}

const MyDreamDiary: FC = ({}): JSX.Element => {
  return (
    <div>
      <I.DreamImageContainer img={DefaultImage}>
        <S.LockIcon src={lockOpen} />
        <I.DiaryDate>8월 15일</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>
        Lorem ipsum dolor sit amet, consetur adipiscing elit, se
      </I.DreamTitle>
    </div>
  );
};

export default MyDreamDiary;
