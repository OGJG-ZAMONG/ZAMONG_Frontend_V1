import * as S from "./styles";
import { useState } from "react";
import Tag from "../Tag/Tag";
import { DreamList } from "../../models/dto/response/dreamListResponse";
import dreamType from "../../constance/dreamType";
import { useHistory } from "react-router";

interface PropsType {
  dream: DreamList;
}

const Dream = ({ dream }: PropsType): JSX.Element => {
  const { push } = useHistory();
  const [isUserImageHover, setIsUserImageHover] = useState<boolean>(false);
  const {
    share_datetime,
    default_posting_image,
    user,
    title,
    lucy_count,
    dream_types,
    uuid,
  } = dream;
  const { profile, id, uuid: userUUID } = user;
  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear())
      return `${date.getFullYear()}-${date.getMonth() + 1}=${date.getDate()}`;

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const tagRender = dreamType
    .filter((value) => dream_types.some((item) => item === value.code))
    .map((value, index) => {
      return <Tag key={index}>{value.name}</Tag>;
    });

  return (
    <>
      <S.DreamContainer to={`/diary/detail/${uuid}`}>
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
            onClick={(e) => {
              e.preventDefault();
              push(`/user/${userUUID}`);
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
