import React, { FC, useEffect, useState } from "react";
import { getFollowing } from "../../../utils/api/Profile";
import * as S from "./style";

interface Following {
  uuid: string;
  profile: string;
  id: string;
  follow_datetime: string;
  is_following: boolean;
}

interface FollowType {
  followings: Following[];
  total_size: number;
}

interface IdType {
  myid: string;
}

const FollowContent: FC<IdType> = (props) => {
  const [followState, setFollow] = useState<FollowType>({
    followings: [],
    total_size: 0,
  });

  useEffect(() => {
    follow();
  }, []);

  const follow = async () => {
    try {
      const response = await getFollowing(props.myid);
      setFollow(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <S.Content>
        <S.Followe>
          팔로우 <span>{followState.total_size}명</span>
        </S.Followe>
        <S.FolloweList>
          {followState.followings &&
            followState.followings.map((data, v) => {
              return (
                <>
                  <S.UserBox>
                    <S.LeftBox>
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
                </>
              );
            })}
        </S.FolloweList>
      </S.Content>
    </>
  );
};

export default FollowContent;
