import React, { FC, useEffect, useState } from "react";
import { DefaultImage, defaultProfile } from "../../../assets";
import dreamType from "../../../constance/dreamType";
import Tag from "../../Tag/Tag";
import * as S from "./style";

interface Props {
  default_posting_image: string;
  title: string;
  lucy_count: number;
  date: string;
  dream_types: string[];
  user: User;
}

interface User {
  uuid: string;
  id: string;
  profile: string;
}

const Dream = ({
  default_posting_image,
  title,
  lucy_count,
  date,
  dream_types,
  user,
}: Props): JSX.Element => {
  const dreamTypes = dreamType.filter((value) => {
    return dream_types.some((item) => item === value.code);
  });
  return (
    <>
      <S.DreamContent>
        <S.DreamImage img={default_posting_image}>
          <S.UserImage alt="user image" src={user.profile} />
        </S.DreamImage>
        <S.DreamInfo>
          <S.DreamTitle>{title}</S.DreamTitle>
          <S.DreamLucy>{lucy_count}LUCY</S.DreamLucy>
          <S.DreamDate>{date}</S.DreamDate>
        </S.DreamInfo>
        <S.DreamTagContent>
          <S.DreamTagInner>
            {dreamTypes.map((value, i) => {
              return <Tag key={i}>{value.name}</Tag>;
            })}
          </S.DreamTagInner>
        </S.DreamTagContent>
      </S.DreamContent>
      <S.Line />
    </>
  );
};

export default Dream;
