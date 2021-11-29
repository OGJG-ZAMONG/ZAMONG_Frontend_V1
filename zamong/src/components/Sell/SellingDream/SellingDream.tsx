import { FC } from "react";
import * as S from "./styles";
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
    profile: "string";
    id: string;
  };
}

const SellingDream: FC<Props> = ({
  price,
  date,
  title,
  tag,
  img,
  user,
}): JSX.Element => {
  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear()) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const dreamTypes = tag.map(
    (value) => dreamType.find((item) => item.code === value)!
  );

  return (
    <S.Container to={`sell/detail?${user.uuid}`}>
      <S.SellingDreamContainer img={img}>
        <S.Price>{`${price.toLocaleString()}원`}</S.Price>
        <S.DiaryDate>{dateToString(new Date(date))}</S.DiaryDate>
      </S.SellingDreamContainer>
      <S.PostInfoContainer>
        <S.UserInfoContainer>
          <S.ProfilePicture src={user.profile} />
          <S.UserName>{user.id}</S.UserName>
        </S.UserInfoContainer>
        <S.TagsContainer>
          {dreamTypes.map((value, index) => {
            if(index >= 2) return
            return <Tag key={value.code}>{value.name}</Tag>;
          })}
        </S.TagsContainer>
      </S.PostInfoContainer>
      <S.SellingDreamTitle>{title}</S.SellingDreamTitle>
    </S.Container>
  );
};

export default SellingDream;
