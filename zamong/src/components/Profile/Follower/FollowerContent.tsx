import React, { FC, useEffect, useState } from "react";
import { getFollower } from "../../../utils/api/Profile";
import * as S from "./style";
import FollowerUser from "../../User/FollowerUser/FollowerUser";
import { follower } from "../../../models/dto/response/profileResponse";
import UserSkeleton from "../../UserSkeleton/UserSkeleton";

interface FollowerType {
  followers: follower[];
  total_size: number;
}
interface IdType {
  id: string;
}

const FollowerContent: React.FC<IdType> = (props) => {
  const [followerState, setFollower] = useState<FollowerType | null>(null);
  const nnState = followerState || {
    followers: [],
    total_size: 0,
  };
  const { followers, total_size } = nnState;

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

  const renderFollowers =
    total_size === 0 ? (
      <S.Text>팔로워가 없습니다.</S.Text>
    ) : (
      followers.map((data, v) => {
        return <FollowerUser data={data} key={v} refresh={follower} />;
      })
    );

  const renderSkeleton = [1, 2, 3, 4, 5].map((_, index) => {
    return <UserSkeleton key={index} />;
  });

  return (
    <>
      <S.Content>
        <S.Follower>
          팔로워 <span>{total_size}명</span>
        </S.Follower>
        <S.FollowerList>{followerState ? renderFollowers : renderSkeleton}</S.FollowerList>
      </S.Content>
    </>
  );
};

export default FollowerContent;
