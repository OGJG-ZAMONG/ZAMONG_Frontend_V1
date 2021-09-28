import { FC } from "react";
import * as S from "./styles";
import defaultImage from "../../../assets/DefaultPostingImages/1.jpg";
import { defaultProfile } from "../../../assets";
import Tag from "../../Tag/Tag";

interface Props {
  price: number;
  date: string;
  userName: string;
  title: string;
  tag: Array<string>;
}

const SellingDream: FC<Props> = ({
  price,
  date,
  userName,
  title,
  tag,
}): JSX.Element => {
  return (
    <S.Container>
      <S.SellingDreamContainer img={defaultImage}>
        <S.Price>{price}₩</S.Price>
        <S.DiaryDate>{date}</S.DiaryDate>
      </S.SellingDreamContainer>
      <S.PostInfoContainer>
        <S.UserInfoContainer>
          <S.ProfilePicture src={defaultProfile} />
          <S.UserName>{userName}</S.UserName>
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
