import * as S from "./styles";
import { useState } from "react";
import Tag from "../Tag/Tag";
import { DreamList } from "../../models/dto/response/dreamListResponse";
import dreamType from "../../constance/dreamType";

interface PropsType {
  dream: DreamList;
}

const Dream = ({ dream }: PropsType): JSX.Element => {
  const [isUserImageHover, setIsUserImageHover] = useState<boolean>(false);
  const { share_datetime, default_posting_image, user, title, lucy_count, dream_types } = dream;
  const { profile, id } = user;
  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear())
      return `${date.getFullYear()}-${date.getMonth() + 1}=${date.getDate()}`;

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const tagRender = dreamType
    .filter((value) => dream_types.some((item) => item === value.code))
    .map((value) => {
      return <Tag>{value.name}</Tag>;
    });

  return (
    <>
      <S.DreamContainer>
        <S.DreamImage img={default_posting_image}>
          <S.DreamUserImage
            alt="user image"
            src={profile}
            onMouseEnter={() => {
              setIsUserImageHover(true);
            }}
            onMouseLeave={() => {
              setIsUserImageHover(false);
            }}
          />
          {isUserImageHover && <S.UserName>{id}</S.UserName>}
        </S.DreamImage>
        <S.DreamInfoContainer>
          <S.DreamTitle>{title}</S.DreamTitle>
          <S.DreamLucy>{lucy_count}LUCY</S.DreamLucy>
          <S.DreamDate>{dateToString(new Date(share_datetime))}</S.DreamDate>
        </S.DreamInfoContainer>
        <S.DreamTagContainer>
          <S.DreamTagInner>{tagRender}</S.DreamTagInner>
        </S.DreamTagContainer>
      </S.DreamContainer>
      <S.Line></S.Line>
    </>
  );
};

export default Dream;
