import React, { FC, useEffect, useState } from "react";
import { getFollowing } from "../../../utils/api/Profile";
import * as S from "./style";
import { following } from "../../../models/dto/response/followingsResponse";
import FollowUser from "../../User/FollowUser/FollowUser";

interface FollowType {
  followings: following[];
  total_size: number;
}

interface IdType {
  id: string;
}

const FollowContent: FC<IdType> = (props) => {
  const [followState, setFollow] = useState<FollowType>({
    followings: [],
    total_size: 0,
  });

  useEffect(() => {
    following();
  }, []);

  const following = async () => {
    try {
      const response = await getFollowing(props.id);
      setFollow(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  return (
    <S.Content>
      <S.Follower>
        팔로우 <span>{followState.total_size}명</span>
      </S.Follower>
      <S.FolloweList>
        {followState.total_size === 0 ? (
          <S.Text>팔로우가 없습니다.</S.Text>
        ) : (
          followState.followings &&
          followState.followings.map((data, v) => {
            return <FollowUser data={data} key={v} refresh={following} />;
          })
        )}
      </S.FolloweList>
    </S.Content>
  );
};

export default FollowContent;
