import * as S from "./styles";
import Tag from "../../Tag/Tag";
import { more } from "../../../assets";

const DiaryDetail = (): JSX.Element => {
  return (
    <S.HeadContainer>
      <S.Title>
        선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여
        선거관리위원회를 둔다. 대통령은 헌법과 법률이 정하는 바에 의하여
        공무원을 임면한다.
      </S.Title>
      <S.TagContainer>
        <Tag>악몽</Tag>
        <Tag>악몽</Tag>
        <Tag>악몽</Tag>
      </S.TagContainer>
      <S.PostingDate>
        <>공유한 날짜 : 9월 24일</>
      </S.PostingDate>
      <S.DreamInfo>
        <S.Price>1000₩</S.Price>
        <S.UserInfo>
          <S.Manner>매너 온도 : 36.5°C</S.Manner>
          <S.Profile>USER04</S.Profile>
          <S.More alt="more" src={more} />
        </S.UserInfo>
      </S.DreamInfo>
    </S.HeadContainer>
  );
};

export default DiaryDetail;
