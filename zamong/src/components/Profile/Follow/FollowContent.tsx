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
  const accessToken = localStorage.getItem("access_token") || "";
  const [FollowState, setFollow] = useState<FollowType>({
    followings: [],
    total_size: 0,
  });
  const userLength: number[] = [];
  const MaxUser = 7;
  for (let i = 0; i < MaxUser; i++) {
    userLength.push(i);
  }
  useEffect(() => {
    follow();
    console.log(props.myid);
  }, []);

  const follow = async () => {
    try {
      const response = await getFollowing(accessToken, props.myid);
      setFollow(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <S.Content>
        <S.Followe>
          팔로우 <span>{FollowState.total_size}명</span>
        </S.Followe>
        <S.FolloweList>
          {FollowState.followings &&
            FollowState.followings.map((data, v) => {
              return (
                <>
                  <S.UserBox>
                    <S.LeftBox>
                      <S.Profile>{data.profile}</S.Profile>
                      <S.UserNickName>{data.id}</S.UserNickName>
                    </S.LeftBox>
                    <S.RightBox>
                      <S.FollowDate>
                        팔로우를 시작한 날짜 :
                        {data.follow_datetime.substring(0, 10)}
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
