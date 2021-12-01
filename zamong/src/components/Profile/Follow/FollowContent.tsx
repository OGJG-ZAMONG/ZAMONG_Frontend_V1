import React, { FC, useEffect, useState } from "react";
import { getFollowing, unfollow, follow } from "../../../utils/api/Profile";
import * as S from "./style";
import { useHistory } from "react-router-dom";

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
  id: string;
}

const FollowContent: FC<IdType> = (props) => {
  const history = useHistory();
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

  const followClick = async (id: string) => {
    try {
      const response = await follow(id);
      following();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const unFollowClick = async (id: string) => {
    try {
      const response = await unfollow(id);
      following();
      return response;
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
                <>
                  <S.UserBox>
                    <S.LeftBox onClick={() => userProfile(data.uuid)}>
                      <S.Profile img={data.profile} />
                      <S.UserNickName>{data.id}</S.UserNickName>
                    </S.LeftBox>
                    <S.RightBox>
                      <S.FollowDate>팔로우를 시작한 날짜 : {date}</S.FollowDate>
                      {data.is_following ? (
                        <S.FollowingBtn
                          onClick={() => unFollowClick(data.uuid)}
                        >
                          팔로우중
                        </S.FollowingBtn>
                      ) : (
                        <S.FollowBtn onClick={() => followClick(data.uuid)}>
                          팔로우
                        </S.FollowBtn>
                      )}
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
