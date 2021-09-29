import * as S from "./styles";
import {
  more,
  profile,
  like,
  dislike,
  toggle,
  plus,
} from "../../../assets/index";

const DiaryDetail = (): JSX.Element => {
  const commentBox = [1, 2];
  const testText = [
    "선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를 둔다. 대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다.",
    "모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 모든 국민은 보건에 관하여 국가의 보호를 받는다. 국가원로자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.국회의원은 법률이 정하는 직을 겸할 수 없다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다.국무총리는 국회의 동의를 얻어 대통령이 임명한다. 재판의 심리와 판결은 공개한다. 다만, 심리는 국가의 안전보장 또는 안녕질서를 방해하거나 선량한 풍속을 해할 염려가 있을 때에는 법원의 결정으로 공개하지 아니할 수 있다.국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.",
  ];

  const commentBoxList = commentBox.map((_, index) => (
    <S.CommentBox>
      <S.CommentProfile>
        <img alt="profile" src={profile} />
      </S.CommentProfile>
      <S.CommnetRight>
        <S.CommentText>{testText[index]}</S.CommentText>
        <S.More alt="more" src={more} />
        <S.CommentBoxBottom>
          <S.CommentDetail>
            <S.CommentToggle>
              덧글 접기&nbsp;
              <S.ToggleImg alt="toggle" src={toggle} />
            </S.CommentToggle>
            <S.CommentPlus>
              <S.PlusImg alt="plus" src={plus} />
              덧글 달기
            </S.CommentPlus>
          </S.CommentDetail>
          <S.Recommend>
            <S.CommentLike>
              <S.LikeImg alt="like" src={like} />
              추천
            </S.CommentLike>
            <S.CommentDisLike>
              <S.DisLikeImg alt="dislike" src={dislike} />
              비추천
            </S.CommentDisLike>
            <S.CommentDate>9월 29일</S.CommentDate>
          </S.Recommend>
        </S.CommentBoxBottom>
        <S.CommentToCommnet>
          <S.CommentBox>
            <S.CommentProfile>
              <img alt="profile" src={profile} />
            </S.CommentProfile>
            <S.CommnetRight>
              <S.CommentText>{testText[index]}</S.CommentText>
              <S.More alt="more" src={more} />
              <S.CommentBoxBottom>
                <S.CommentDetail>
                  <S.CommentToggle>
                    덧글 접기&nbsp;
                    <S.ToggleImg alt="toggle" src={toggle} />
                  </S.CommentToggle>
                  <S.CommentPlus>
                    <S.PlusImg alt="plus" src={plus} />
                    덧글 달기
                  </S.CommentPlus>
                </S.CommentDetail>
                <S.Recommend>
                  <S.CommentLike>
                    <S.LikeImg alt="like" src={like} />
                    추천
                  </S.CommentLike>
                  <S.CommentDisLike>
                    <S.DisLikeImg alt="dislike" src={dislike} />
                    비추천
                  </S.CommentDisLike>
                  <S.CommentDate>9월 29일</S.CommentDate>
                </S.Recommend>
              </S.CommentBoxBottom>
              <S.CommentToCommnet></S.CommentToCommnet>
            </S.CommnetRight>
          </S.CommentBox>
        </S.CommentToCommnet>
      </S.CommnetRight>
    </S.CommentBox>
  ));

  return (
    <S.CommentContainer>
      <S.CommentTitle>
        Comment&nbsp;<S.CommentCount>28</S.CommentCount>
      </S.CommentTitle>
      <S.InputContainer>
        <S.CommentInput placeholder="댓글 쓰기..." />
        <S.EnterButton>댓글 쓰기</S.EnterButton>
      </S.InputContainer>
      <S.CommentList>{commentBoxList}</S.CommentList>
    </S.CommentContainer>
  );
};

export default DiaryDetail;
