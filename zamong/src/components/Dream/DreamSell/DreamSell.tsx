import * as S from "../styles";
import { useState } from "react";
import Tag from "../../Tag/Tag";
import dreamType from "../../../constance/dreamType";
import { useHistory } from "react-router";
import { sellSearchList } from "../../../models/dto/response/SellListResponse";

interface PropsType {
  dream: sellSearchList;
}

const DreamSell = ({ dream }: PropsType): JSX.Element => {
  const { push } = useHistory();
  const [isUserImageHover, setIsUserImageHover] = useState<boolean>(false);
  const {
    uuid,
    default_posting_image,
    title,
    dream_types,
    updated_at,
    cost,
    user,
  } = dream;
  const { profile, id, uuid: userUUID } = user;
  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear())
      return `${date.getFullYear()}-${date.getMonth() + 1}=${date.getDate()}`;

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const tagRender = dreamType
    .filter((value) => dream_types.some((item: string) => item === value.code))
    .map((value, index) => {
      return <Tag key={index}>{value.name}</Tag>;
    });

  return (
    <>
      <S.DreamContainer to={`/sell/detail/${uuid}`}>
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
          <S.DreamLucy>{cost}원</S.DreamLucy>
          <S.DreamDate>{dateToString(new Date(updated_at))}</S.DreamDate>
        </S.DreamInfoContainer>
        <S.DreamTagContainer>
          <S.DreamTagInner>{tagRender}</S.DreamTagInner>
        </S.DreamTagContainer>
      </S.DreamContainer>
      <S.Line />
    </>
  );
};

export default DreamSell;
