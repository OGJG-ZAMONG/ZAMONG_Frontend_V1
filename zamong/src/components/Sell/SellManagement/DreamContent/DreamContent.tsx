import * as S from "./style";
import { DefaultImage } from "../../../../assets";
import Tag from "../../../Tag/Tag";
import { FC } from "react";

interface Props {
  price: number;
  date: string;
  tag: Array<string>;
  title: string;
}

const DreamContent: FC<Props> = ({ price, date, tag, title }): JSX.Element => {
  return (
    <>
      <S.ContentBox>
        <S.TopBox img={DefaultImage}>
          <S.Price>{price}₩</S.Price>
          <S.Date>{date}</S.Date>
        </S.TopBox>
        <S.BottomBox>
          <S.Tag>
            {tag.map((value: string, index: number) => {
              return <Tag key={index}>{value}</Tag>;
            })}
          </S.Tag>
          <S.Title>{title}</S.Title>
        </S.BottomBox>
      </S.ContentBox>
    </>
  );
};

export default DreamContent;
