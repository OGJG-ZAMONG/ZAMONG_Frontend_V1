import dreamType from "../../../constance/dreamType";
import { SellDream } from "../../../models/dto/response/sellManagementResponse";
import Tag from "../../Tag/Tag";
import * as S from "../index";
import * as I from "../SellingDream/styles";

interface PropsType {
  data: SellDream;
}

const MySellDreamCard = ({ data }: PropsType) => {
  const { cost, default_posting_image, dream_types, title, updated_at, user, uuid } = data;

  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear()) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const dreamTypes = dreamType.filter((value) => dream_types.some((elem) => value.code === elem));

  return (
    <S.DreamCardContainer to={`sell/detail/${uuid}`}>
      <S.DreamImageContainer img={default_posting_image}>
        <I.Price>{`${cost.toLocaleString()}원`}</I.Price>
        <S.DiaryDate>{dateToString(new Date(updated_at))}</S.DiaryDate>
      </S.DreamImageContainer>
      <I.PostInfoContainer>
        <I.TagsContainer>
          {dreamTypes.slice(0, 2).map((value, index) => {
            return <Tag key={value.code}>{value.name}</Tag>;
          })}
        </I.TagsContainer>
      </I.PostInfoContainer>
      <S.DreamTitle>{title}</S.DreamTitle>
    </S.DreamCardContainer>
  );
};

export default MySellDreamCard;
