import React, { FC, useEffect, useState } from "react";
import { getFollowing } from "../../../utils/api/Profile";
import * as S from "./style";
import { following } from "../../../models/dto/response/followingsResponse";
import FollowUser from "../../User/FollowUser/FollowUser";
import UserSkeleton from "../../UserSkeleton/UserSkeleton";

interface FollowType {
  followings: following[];
  total_size: number;
}

interface IdType {
  id: string;
}

const FollowContent: FC<IdType> = (props) => {
  const [followState, setFollow] = useState<FollowType | null>(null);
  const nnState: FollowType = followState || {
    followings: [],
    total_size: 0,
  };
  const { followings, total_size } = nnState;

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

  const renderFollowings =
    total_size === 0 ? (
      <S.Text>팔로우가 없습니다.</S.Text>
    ) : (
      followings.map((data, v) => {
        return <FollowUser data={data} key={v} refresh={following} />;
      })
    );

  const renderSkeleton = [1, 2, 3, 4, 5].map((_, index) => {
    return <UserSkeleton key={index} />;
  });

  return (
    <S.Content>
      <S.Follower>
        팔로우 <span>{total_size}명</span>
      </S.Follower>
      <S.FolloweList>{followState ? renderFollowings : renderSkeleton}</S.FolloweList>
    </S.Content>
  );
};

export default FollowContent;
