import React, { FC, useEffect, useState } from "react";
import { follow, getFollower, unfollow } from "../../../utils/api/Profile";
import * as S from "./style";
import { Link, useHistory } from "react-router-dom";
import FollowerUser from "../../User/FollowerUser/FollowerUser";
import { follower } from "../../../models/dto/response/profileResponse";

interface FollowerType {
  followers: follower[];
  total_size: number;
}
interface IdType {
  id: string;
}

const FollowerContent: React.FC<IdType> = (props) => {
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
              return <FollowerUser data={data} key={v} refresh={follower} />;
            })
          )}
        </S.FollowerList>
      </S.Content>
    </>
  );
};

export default FollowerContent;
