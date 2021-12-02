import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Follower, Follow, AccountInfo } from "../../assets";
import FollowerContent from "./Follower/FollowerContent";
import FollowContent from "./Follow/FollowContent";
import AccountContent from "./Account/AccountContent";
import { useHistory } from "react-router";
import {
  getFollower,
  getFollowing,
  getMyProfile,
} from "../../utils/api/Profile";

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

const ProfilePage = (): JSX.Element => {
  const [comp, setComp] = useState();
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
  const { uuid, name, email, id, profile, share_dream_count, lucy_count } =
    profileState;
  const FOLLORWER = 1;
  const FOLLORWING = 2;
  const ACCOUNTINFO = 3;
  const [contentState, setContentState] = useState(FOLLORWER);

  const onFollowerClick = () => {
    setContentState(FOLLORWER);
  };

  const onFollowClick = () => {
    setContentState(FOLLORWING);
  };

  const onAccountInfoClick = () => {
    setContentState(ACCOUNTINFO);
  };

  useEffect(() => {
    myProfile();
  }, []);

  useEffect(() => {
    follower();
    follow();
  }, [uuid]);

  const myProfile = async () => {
    try {
      const response = await getMyProfile();
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
      .set(FOLLORWING, FollowContent)
      .set(ACCOUNTINFO, AccountContent);
    const content = React.createElement(contentMap.get(contentState)!, {
      id: uuid,
    });
    return <>{content}</>;
  };

  return (
    <>
      {FollowerContent}
      {FollowContent}
      {AccountContent}
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
                <S.LinkText to="/diary">
                  내가 쓴 꿈 일기 {share_dream_count}개
                </S.LinkText>
                <span>{lucy_count}LUCY</span>
              </S.OneLineBox>
              <S.NameBox>이름: {name}</S.NameBox>
            </S.InfoBox>
          </S.TopContent>
        </S.TopBox>
        <S.SelectionBox>
          <S.SelectionContent>
            <S.ChooseBox onClick={onFollowerClick}>
              <div>
                <img src={Follower} />
                <span>팔로워</span>
              </div>
            </S.ChooseBox>
            <S.ChooseBox onClick={onFollowClick}>
              <div>
                <img src={Follow} />
                <span>팔로우</span>
              </div>
            </S.ChooseBox>
            <S.ChooseBox onClick={onAccountInfoClick}>
              <div>
                <img src={AccountInfo} />
                <span>계정 정보</span>
              </div>
            </S.ChooseBox>
          </S.SelectionContent>
        </S.SelectionBox>
        <div>{renderContent()}</div>
      </S.ProfileContent>
    </>
  );
};

export default ProfilePage;
