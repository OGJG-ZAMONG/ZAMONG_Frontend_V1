import { FC } from "react";
import * as S from "..";
import * as I from "./styles";
import Tag from "../../Tag/Tag";
import dreamType from "../../../constance/dreamType";
import { useHistory } from "react-router";

interface Props {
  uuid: string;
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

const SellingDream: FC<Props> = ({ price, date, title, tag, img, user, uuid }): JSX.Element => {
  const { push } = useHistory();

  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear()) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const dreamTypes = dreamType.filter((value) => tag.some((elem) => value.code === elem));

  return (
    <S.DreamCardContainer to={`sell/detail/${uuid}`}>
      <S.DreamImageContainer img={img}>
        <I.Price>{`${price.toLocaleString()}원`}</I.Price>
        <S.DiaryDate>{dateToString(new Date(date))}</S.DiaryDate>
      </S.DreamImageContainer>
      <I.PostInfoContainer>
        <I.UserInfoContainer
          onClick={(e) => {
            e.preventDefault();
            push(`user/${user.uuid}`);
          }}
        >
          <I.ProfilePicture src={user.profile} />
          <I.UserName>{user.id}</I.UserName>
        </I.UserInfoContainer>
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

export default SellingDream;
