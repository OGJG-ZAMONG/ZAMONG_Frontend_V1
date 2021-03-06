import React, { useEffect, useLayoutEffect, useState } from "react";
import * as S from "./style";
import { Follower, Follow, AccountInfo } from "../../assets";
import FollowerContent from "./Follower/FollowerContent";
import FollowContent from "./Follow/FollowContent";
import AccountContent from "./Account/AccountContent";
import { useHistory, useLocation } from "react-router";
import {
  getFollower,
  getFollowing,
  getMyProfile,
} from "../../utils/api/Profile";
import Badge from "./Badge/Badge";

interface ProfileType {
  uuid: string;
  name: string;
  email: string;
  id: string;
  profile: string;
  share_dream_count: number;
  lucy_count: number;
  bought_sell_dream_count: number;
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

const ProfilePage = (): JSX.Element => {
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
    bought_sell_dream_count: 0,
  });
  const {
    uuid,
    name,
    email,
    id,
    profile,
    share_dream_count,
    lucy_count,
    bought_sell_dream_count,
  } = profileState;
  const FOLLORWER = 1;
  const FOLLORWING = 2;
  const ACCOUNTINFO = 3;
  const [contentState, setContentState] = useState(FOLLORWER);
  const query = new URLSearchParams(useLocation().search);
  const { push } = useHistory();

  const onFollowerClick = () => {
    setContentState(FOLLORWER);
  };

  const onFollowClick = () => {
    setContentState(FOLLORWING);
  };

  const onAccountInfoClick = () => {
    setContentState(ACCOUNTINFO);
  };

  const settingContentStateWithQueryString = () => {
    const paramState = query.get("state");
    if (!paramState) {
      return;
    }

    try {
      const state = Number(paramState);
      if (state > 0 && state <= 3) {
        setContentState(state);
      }
    } catch (error) {
      push("/profile");
    }
  };

  useEffect(() => {
    myProfile();
  }, []);

  useEffect(() => {
    //follower();
    // follow();
  }, [uuid]);

  useLayoutEffect(() => {
    settingContentStateWithQueryString();
  }, []);

  const myProfile = async () => {
    try {
      const response = await getMyProfile();
      setProfile(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  // const follower = async () => {
  //   try {
  //     const response = await getFollower(uuid);
  //     setFollower(response.data.content.response);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // const follow = async () => {
  //   try {
  //     const response = await getFollowing(uuid);
  //     setFollow(response.data.content.response);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const renderContent = (): JSX.Element => {
    const contentMap = new Map<number, React.FC<IdType>>()
      .set(FOLLORWER, FollowerContent)
      .set(FOLLORWING, FollowContent)
      .set(ACCOUNTINFO, AccountContent);
    const content = React.createElement(contentMap.get(contentState)!, {
      id: uuid,
    });
    return <>{content}</>;
  };

  interface navType {
    img: string;
    text: string;
    onClick: () => void;
  }

  const navs: navType[] = [
    {
      img: Follower,
      text: "?????????",
      onClick: onFollowerClick,
    },
    {
      img: Follow,
      text: "?????????",
      onClick: onFollowClick,
    },
    {
      img: AccountInfo,
      text: "?????? ??????",
      onClick: onAccountInfoClick,
    },
  ];

  return (
    <>
      <S.ProfileContent>
        <S.TopBox>
          <S.TopContent>
            <S.ProfileBox img={profile} />
            <S.InfoBox>
              <S.IdContainer>
                <S.NickNameText>{id}</S.NickNameText>
                <Badge count={0} />
              </S.IdContainer>
              <S.EmailText>{email}</S.EmailText>
              <S.OneLineBox>
                <S.Text onClick={onFollowerClick}>
                  ????????? {followerState.total_size}???
                </S.Text>
                <S.Text onClick={onFollowClick}>
                  ????????? {followState.total_size}???
                </S.Text>
                <S.LinkText to="/diary">
                  ??? ??? ?????? {share_dream_count}???
                </S.LinkText>
                <span>{lucy_count}LUCY</span>
              </S.OneLineBox>
              <S.NameBox>??????: {name}</S.NameBox>
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

export default ProfilePage;
