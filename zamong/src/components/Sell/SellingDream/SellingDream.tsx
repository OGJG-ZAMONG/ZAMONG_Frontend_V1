import { FC, useState } from "react";
import * as S from "./styles";
import Tag from "../../Tag/Tag";
import dreamType from '../../../constance/dreamType';

interface Props {
  price: number;
  date: string;
  title: string;
  tag: Array<string>;
  img: string;
  user: any;
}

const SellingDream: FC<Props> = ({
  price,
  date,
  title,
  tag,
  img,
  user
}): JSX.Element => {
  // const [renderTag, setRenderTag] = useState();
  const newTag = tag.forEach((value, index) => {
    
  })

  return (
    <S.Container>
      <S.SellingDreamContainer img={img}>
        <S.Price>{price} ₩</S.Price>
        <S.DiaryDate>{date}</S.DiaryDate>
      </S.SellingDreamContainer>
      <S.PostInfoContainer>
        <S.UserInfoContainer>
          <S.ProfilePicture src={user.profile} />
          <S.UserName>{user.id}</S.UserName>
        </S.UserInfoContainer>
        <S.TagsContainer>
          {tag.map((value: string, index: number) => {
            return <Tag key={index}>{value}</Tag>;
          })}
        </S.TagsContainer>
      </S.PostInfoContainer>
      <S.SellingDreamTitle>{title}</S.SellingDreamTitle>
    </S.Container>
  );
};

export default SellingDream;
