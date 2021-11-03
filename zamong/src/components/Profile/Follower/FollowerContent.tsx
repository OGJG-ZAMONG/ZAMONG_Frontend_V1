import * as S from "./style";

const FollowerContent = (): JSX.Element => {
  const userLength: number[] = [];
  const MaxUser = 12;
  for (let i = 0; i < MaxUser; i++) {
    userLength.push(i);
  }
  return (
    <>
      <S.Content>
        <S.Follower>
          팔로워 <span>12명</span>
        </S.Follower>
        <S.FollowerList>
          {userLength.map((v) => {
            return (
              <>
                <S.UserBox>
                  <S.LeftBox>
                    <S.Profile></S.Profile>
                    <S.UserNickName>dsmwhitie</S.UserNickName>
                  </S.LeftBox>
                  <S.RightBox>
                    <S.FollowDate>
                      팔로우를 시작한 날짜 : 10월 18일
                    </S.FollowDate>
                    <S.FollowBtn>팔로우중</S.FollowBtn>
                  </S.RightBox>
                </S.UserBox>
              </>
            );
          })}
        </S.FollowerList>
      </S.Content>
    </>
  );
};

export default FollowerContent;
