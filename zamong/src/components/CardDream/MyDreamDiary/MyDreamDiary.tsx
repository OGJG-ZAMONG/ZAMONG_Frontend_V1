import * as S from "./styles";
import * as I from "../index";
import { DefaultImage } from "../../../assets/index";
import lockOpen from "../../../assets/icons/lockOpen.svg";

const MyDreamDiary = (): JSX.Element => {
  return (
    <div>
      <I.DreamImageContainer img={DefaultImage}>
        <S.LockIcon src={lockOpen} />
        <I.DiaryDate>8월 15일</I.DiaryDate>
      </I.DreamImageContainer>
      <I.DreamTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
      </I.DreamTitle>
    </div>
  );
};

export default MyDreamDiary;
