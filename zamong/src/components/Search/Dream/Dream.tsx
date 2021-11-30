import React, { FC, useEffect, useState } from "react";
import { DefaultImage, defaultProfile } from "../../../assets";
import Tag from "../../Tag/Tag";
import * as S from "./style";

interface Props {
  default_posting_image: string;
  title: string;
  lucy_count: number;
  date: string;
}

const Dream = ({
  default_posting_image,
  title,
  lucy_count,
  date,
}: Props): JSX.Element => {
  return (
    <>
      <S.DreamContent>
        <S.DreamImage img={DefaultImage}>
          <S.UserImage alt="user image" src={defaultProfile} />
        </S.DreamImage>
        <S.DreamInfo>
          <S.DreamTitle>{title}</S.DreamTitle>
          <S.DreamLucy>{lucy_count}LUCY</S.DreamLucy>
          <S.DreamDate>{date}</S.DreamDate>
        </S.DreamInfo>
        <S.DreamTagContent>
          <S.DreamTagInner>
            <Tag>{["악몽"]}</Tag>
          </S.DreamTagInner>
        </S.DreamTagContent>
      </S.DreamContent>
      <S.Line />
    </>
  );
};

export default Dream;
