import * as S from "./styles";
import defaultImage from "../../assets/DefaultPostingImages/1.jpg";
import { useState } from "react";
import Tag from "../Tag/Tag";

const Dream = (): JSX.Element => {
  const [isUserImageHover, setIsUserImageHover] = useState<boolean>();

  return (
    <>
      <S.DreamContainer>
        <S.DreamImage img={DefaultImage}>
          <S.DreamUserImage
            alt="user image"
            src={DefaultImage}
            onMouseEnter={() => {
              setIsUserImageHover(true);
            }}
            onMouseLeave={() => {
              setIsUserImageHover(false);
            }}
          />
          {isUserImageHover && <S.UserName>USER04</S.UserName>}
        </S.DreamImage>
        <S.DreamInfoContainer>
          <S.DreamTitle>
            대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다.
            대통령은 조약을...
          </S.DreamTitle>
          <S.DreamLucy>86LUCY</S.DreamLucy>
          <S.DreamDate>8월 1일 </S.DreamDate>
        </S.DreamInfoContainer>
        <S.DreamTagContainer>
          <S.DreamTagInner>
            <Tag>악몽</Tag>
            <Tag>첫 게시물</Tag>
            <Tag>루시드 드림</Tag>
            <Tag>거짓 깨어남</Tag>
          </S.DreamTagInner>
        </S.DreamTagContainer>
      </S.DreamContainer>
      <S.Line></S.Line>
    </>
  );
};

export default Dream;
