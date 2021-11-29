import React, { FC, useEffect, useState } from "react";
import { getFollower } from "../../../utils/api/Profile";
import * as S from "./style";
import { useHistory } from "react-router-dom";
interface Follower {
  uuid: string;
  profile: string;
  id: string;
  follow_datetime: string;
  is_following: boolean;
}
interface FollowerType {
  followers: Follower[];
  total_size: number;
}
interface IdType {
  myid: string;
}

const FollowerContent: FC<IdType> = (props) => {
  const { push } = useHistory();
  const [followerState, setFollower] = useState<FollowerType>({
    followers: [],
    total_size: 0,
  });

  useEffect(() => {
    follower();
  }, [props]);

  useEffect(() => {}, [followerState]);

  const follower = async () => {
    try {
      const response = await getFollower(props.myid);
      setFollower(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <S.Content>
        <S.Follower>
          팔로워 <span>{followerState.total_size}명</span>
        </S.Follower>
        <S.FollowerList>
          {followerState.followers &&
            followerState.followers.map((data, v) => {
              const userProfile = () => {
                //   return <UserProfilePage id={data.id} />;
              };
              return (
                <S.UserBox>
                  <S.LeftBox onClick={userProfile}>
                    <S.Profile img={data.profile} />
                    <S.UserNickName>{data.id}</S.UserNickName>
                  </S.LeftBox>
                  <S.RightBox>
                    <S.FollowDate>
                      팔로우를 시작한 날짜 : {data.follow_datetime.substring(0, 10)}
                    </S.FollowDate>
                    <S.FollowBtn>팔로우중</S.FollowBtn>
                  </S.RightBox>
                </S.UserBox>
              );
            })}
        </S.FollowerList>
      </S.Content>
    </>
  );
};

export default FollowerContent;
