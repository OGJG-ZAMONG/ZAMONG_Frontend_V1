import React, { useEffect, useLayoutEffect, useState } from "react";
import * as S from "./styles";
import { Follower, Follow } from "../../../assets";
import FollowerContent from "../Follower/FollowerContent";
import FollowContent from "../Follow/FollowContent";
import { getAntherUsersProfile, getFollower, getFollowing } from "../../../utils/api/Profile";
import { useHistory, useLocation } from "react-router";

interface ProfileType {
  uuid: string;
  name: string;
  email: string;
  id: string;
  profile: string;
  share_dream_count: number;
  lucy_count: number;
}

interface IdType {
  id: string;
}

interface FollowerType {
  total_size: number;
}

interface FollowType {
  total_size: number;
}

const AnotherProfilePage: React.FC<IdType | null> = (props): JSX.Element => {
  const [followerState, setFollower] = useState<FollowerType>({
    total_size: 0,
  });
  const [followState, setFollow] = useState<FollowType>({
    total_size: 0,
  });
  const [profileState, setProfile] = useState<ProfileType>({
    uuid: "",
    name: "",
    email: "",
    id: "",
    profile: "",
    share_dream_count: 0,
    lucy_count: 0,
  });
  const { uuid, name, email, id, profile } = profileState;
  const FOLLORWER = 1;
  const FOLLORWING = 2;
  const [contentState, setContentState] = useState(FOLLORWER);
  const query = new URLSearchParams(useLocation().search);
  const { push } = useHistory();

  const onFollowerClick = () => {
    setContentState(FOLLORWER);
  };

  const onFollowClick = () => {
    setContentState(FOLLORWING);
  };

  const settingContentStateWithQueryString = () => {
    const paramState = query.get("state");
    if (!paramState) {
      return;
    }

    try {
      const state = Number(paramState);
      if (state > 0 && state <= 2) {
        setContentState(state);
      }
    } catch (error) {
      push("/profile");
    }
  };

  useLayoutEffect(() => {
    settingContentStateWithQueryString();
  }, []);

  useEffect(() => {
    usersProfile();
  }, [props.id]);

  useEffect(() => {
    follower();
    follow();
  }, [uuid]);

  const usersProfile = async () => {
    try {
      const response = await getAntherUsersProfile(props.id);
      setProfile(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  const follower = async () => {
    try {
      const response = await getFollower(uuid);
      setFollower(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  const follow = async () => {
    try {
      const response = await getFollowing(uuid);
      setFollow(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  const renderContent = (): JSX.Element => {
    const contentMap = new Map<number, React.FC<IdType>>()
      .set(FOLLORWER, FollowerContent)
      .set(FOLLORWING, FollowContent);
    const content = React.createElement(contentMap.get(contentState)!, {
      id: uuid,
    });
    return <>{content}</>;
  };

  const is_following = true;

  interface navType {
    img: string;
    text: string;
    onClick: () => void;
  }

  const navs: navType[] = [
    {
      img: Follower,
      text: "팔로워",
      onClick: onFollowerClick,
    },
    {
      img: Follow,
      text: "팔로우",
      onClick: onFollowClick,
    },
  ];

  return (
    <>
      {FollowerContent}
      {FollowContent}
      <S.ProfileContent>
        <S.TopBox>
          <S.TopContent>
            <S.ProfileBox img={profile} />
            <S.InfoBox>
              <S.NickNameText>{id}</S.NickNameText>
              <S.EmailText>{email}</S.EmailText>
              <S.OneLineBox>
                <S.Text onClick={onFollowerClick}>
                  팔로워 {followerState.total_size}명
                </S.Text>
                <S.Text onClick={onFollowClick}>
                  팔로우 {followState.total_size}명
                </S.Text>
              </S.OneLineBox>
              <S.LineBox>
                <S.NameBox>이름: {name}</S.NameBox>
                {is_following ? (
                  <S.FollowingBtn>팔로우중</S.FollowingBtn>
                ) : (
                  <S.FollowBtn>팔로우</S.FollowBtn>
                )}
              </S.LineBox>
            </S.InfoBox>
          </S.TopContent>
        </S.TopBox>
        <S.SelectionBox>
          <S.SelectionContent>
            {navs.map((value, index) => {
              const { img, text, onClick } = value;
              return (
                <S.ChooseBox
                  isActive={contentState === index + 1}
                  onClick={onClick}
                  key={index}
                >
                  <img src={img} alt={text} />
                  <span>{text}</span>
                </S.ChooseBox>
              );
            })}
          </S.SelectionContent>
        </S.SelectionBox>
        <div>{renderContent()}</div>
      </S.ProfileContent>
    </>
  );
};

export default AnotherProfilePage;
