import * as S from "./styles";
import Tag from "../../Tag/Tag";
import { defaultProfile, more } from "../../../assets";

const DiaryDetailHeader = (): JSX.Element => {
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
      <S.DreamInfo>
        <S.LeftInfo>
          <S.PostingDate>
            <S.DreamingDate>꿈 꾼 날짜 : 9월 24일</S.DreamingDate>
            <>공유한 날짜 : 9월 24일</>
          </S.PostingDate>
          <div>
            <>수면 시각 : 0:17부터 7:23까지</>
          </div>
          <div>
            <>꿈의 품질 : 😚 아주 좋아요</>
          </div>
        </S.LeftInfo>
        <S.UserInfo>
          <img alt="profile" src={defaultProfile} />
          <S.Profile>
            USER04</S.Profile>
          <img alt="more" src={more} />
        </S.UserInfo>
      </S.DreamInfo>
    </S.HeadContainer>
  );
};

export default DiaryDetailHeader;