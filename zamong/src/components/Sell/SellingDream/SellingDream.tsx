import { FC } from "react";
import defaultImage from "../../../assets/DefaultPostingImages/1.jpg";
import * as S from "./styles";
import { TagContainer } from "../../Tag/Styles";
import { defaultProfile } from "../../../assets";

const SellingDream: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.SellingDreamContainer img={defaultImage}>
        <S.Price>1000₩</S.Price>
        <S.DiaryDate>8월 15일</S.DiaryDate>
      </S.SellingDreamContainer>
      <S.PostInfoContainer>
        <S.UserInfoContainer>
          <S.ProfilePicture src={defaultProfile} />
          <S.UserName>USER04</S.UserName>
        </S.UserInfoContainer>
        <S.TagsContainer>
          <TagContainer>루시드 드림</TagContainer>
          <TagContainer>악몽</TagContainer>
        </S.TagsContainer>
      </S.PostInfoContainer>
      <S.SellingDreamTitle>
        대법관은 대법원장의 제청으로 국회의 동의를 얻어...
      </S.SellingDreamTitle>
    </S.Container>
  );
};

export default SellingDream;
