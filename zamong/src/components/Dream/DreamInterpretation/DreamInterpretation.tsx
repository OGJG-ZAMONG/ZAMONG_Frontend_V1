import { useState } from "react";
import dreamType from "../../../constance/dreamType";
import * as I from "../styles";
import Default from "../../../assets/DefaultPostingImages/1.jpg";
import Tag from "../../Tag/Tag";

const DreamInterpretation = (): JSX.Element => {
  const [isUserImageHover, setIsUserImageHover] = useState<boolean>(false);

  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear())
      return `${date.getFullYear()}-${date.getMonth() + 1}=${date.getDate()}`;

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <>
      <I.DreamContainer to="">
        <I.DreamImage img={Default}>
          <I.DreamUserImage
            alt="user image"
            src={Default}
            onMouseEnter={() => {
              setIsUserImageHover(true);
            }}
            onMouseLeave={() => {
              setIsUserImageHover(false);
            }}
          />
          {isUserImageHover && <I.UserName>kjg2004</I.UserName>}
        </I.DreamImage>
        <I.DreamInfoContainer>
          <I.DreamTitle>안녕하세요 이거 해몽해주세요.</I.DreamTitle>
          <I.DreamLucy>21 LUCY 지급</I.DreamLucy>
          <I.DreamDate>8월 1일</I.DreamDate>
        </I.DreamInfoContainer>
        <I.DreamTagContainer>
          <I.DreamTagInner>
            <Tag>악몽</Tag>
            <Tag>첫 게시물</Tag>
            <Tag>루시드 드림</Tag>
            <Tag>거짓 깨어남</Tag>
          </I.DreamTagInner>
        </I.DreamTagContainer>
      </I.DreamContainer>
      <I.Line></I.Line>
    </>
  );
};

export default DreamInterpretation;
