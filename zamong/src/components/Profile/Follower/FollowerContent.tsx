import React, { FC, useEffect, useState } from "react";
import { follow, getFollower, unfollow } from "../../../utils/api/Profile";
import * as S from "./style";
import { Link, useHistory } from "react-router-dom";

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
  id: string;
}

const FollowerContent: React.FC<IdType> = (props) => {
  const history = useHistory();
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
      const response = await getFollower(props.id);
      setFollower(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  const followClick = async (id: string) => {
    try {
      const response = await follow(id);
      follower();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const unFollowClick = async (id: string) => {
    try {
      const response = await unfollow(id);
      follower();
      return response;
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
          {followerState.total_size === 0 ? (
            <S.Text>팔로워가 없습니다.</S.Text>
          ) : (
            followerState.followers &&
            followerState.followers.map((data, v) => {
              const date =
                data.follow_datetime.substring(5, 7) +
                "월" +
                " " +
                (data.follow_datetime.substring(8, 10) + "일");
              const userProfile = (uuid: string) => {
                alert("QNd");
                history.push(`/user/${uuid}`);
              };
              return (
                <S.UserBox>
                  <S.LeftBox onClick={() => userProfile(data.uuid)}>
                    <S.Profile img={data.profile} />
                    <S.UserNickName>{data.id}</S.UserNickName>
                  </S.LeftBox>
                  <S.RightBox>
                    <S.FollowDate>팔로우를 시작한 날짜 : {date}</S.FollowDate>
                    {data.is_following ? (
                      <S.FollowingBtn onClick={() => unFollowClick(data.uuid)}>
                        팔로우중
                      </S.FollowingBtn>
                    ) : (
                      <S.FollowBtn onClick={() => followClick(data.uuid)}>
                        팔로우
                      </S.FollowBtn>
                    )}
                  </S.RightBox>
                </S.UserBox>
              );
            })
          )}
        </S.FollowerList>
      </S.Content>
    </>
  );
};

export default FollowerContent;
