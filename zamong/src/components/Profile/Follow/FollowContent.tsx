import * as S from "./style";

const FollowContent = (): JSX.Element => {
  const userLength: number[] = [];
  const MaxUser = 7;
  for (let i = 0; i < MaxUser; i++) {
    userLength.push(i);
  }
  return (
    <>
      <S.Content>
        <S.Followe>
          팔로우 <span>7명</span>
        </S.Followe>
        <S.FolloweList>
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
        </S.FolloweList>
      </S.Content>
    </>
  );
};

export default FollowContent;
