import * as S from "./style";
import { DefaultImage } from "../../../../assets";
import Tag from "../../../Tag/Tag";
import { FC } from "react";

interface Props {
  price: number;
  date: string;
  tag: Array<string>;
  title: string;
  defalut_image: string;
  user: {
    uuid: string;
    profile: string;
    id: string;
  };
  uuid: string;
}

const DreamContent: FC<Props> = ({
  price,
  date,
  tag,
  title,
  defalut_image,
  user,
  uuid,
}): JSX.Element => {
  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear()) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };
  return (
    <>
      <S.ContentBox>
        <S.TopBox img={defalut_image}>
          <S.Price>{price}원</S.Price>
          <S.Date>{dateToString(new Date(date))}</S.Date>
        </S.TopBox>
        <S.BottomBox>
          <S.UserInfoContainer>
            <S.ProfilePicture src={user.profile} />
            <S.UserName>{user.id}</S.UserName>
          </S.UserInfoContainer>
          <S.Tag>
            {tag.map((value: string, index: number) => {
              return <Tag key={index}>{value}</Tag>;
            })}
          </S.Tag>
        </S.BottomBox>
        <S.Title>{title}</S.Title>
      </S.ContentBox>
    </>
  );
};

export default DreamContent;
