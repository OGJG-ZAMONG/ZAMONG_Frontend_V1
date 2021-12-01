import { FC } from "react";
import * as S from "..";
import * as I from "./styles";
import Tag from "../../Tag/Tag";
import dreamType from "../../../constance/dreamType";

interface Props {
  price: number;
  date: Date;
  title: string;
  tag: Array<string>;
  img: string;
  user: {
    uuid: string;
    profile: string;
    id: string;
  };
}

const SellingDream: FC<Props> = ({ price, date, title, tag, img, user }): JSX.Element => {
  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear()) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const dreamTypes = tag.map((value) => dreamType.find((item) => item.code === value)!);

  return (
    <S.DreamCardContainer to={`sell/detail/${user.uuid}`}>
      <S.DreamImageContainer img={img}>
        <I.Price>{`${price.toLocaleString()}원`}</I.Price>
        <S.DiaryDate>{dateToString(new Date(date))}</S.DiaryDate>
      </S.DreamImageContainer>
      <I.PostInfoContainer>
        <I.UserInfoContainer>
          <I.ProfilePicture src={user.profile} />
          <I.UserName>{user.id}</I.UserName>
        </I.UserInfoContainer>
        <I.TagsContainer>
          {dreamTypes.map((value, index) => {
            if (index >= 2) return;
            return <Tag key={value.code}>{value.name}</Tag>;
          })}
        </I.TagsContainer>
      </I.PostInfoContainer>
      <S.DreamTitle>{title}</S.DreamTitle>
    </S.DreamCardContainer>
  );
};

export default SellingDream;
