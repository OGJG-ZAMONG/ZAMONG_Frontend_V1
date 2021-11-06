import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Follower, Follow, AccountInfo } from "../../assets";
import FollowerContent from "./Follower/FollowerContent";
import FollowContent from "./Follow/FollowContent";
import AccountContent from "./Account/AccountContent";
import { getMyProfile } from "../../utils/api/Profile";

interface ProfileType {
  uuid: string;
  name: string;
  email: string;
  id: string;
  profile: string;
  share_dream_count: number;
  lucy_count: number;
}

const ProfilePage = (): JSX.Element => {
  const accessToken = localStorage.getItem("access_token") || "";
  const [comp, setComp] = useState();
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
  const [content, setContent] = useState(<FollowerContent />);

  const onFollowerClick = () => {
    if (content !== <FollowerContent />) {
      setContent(<FollowerContent />);
    }
  };
  const onFollowClick = () => {
    if (content !== <FollowContent />) {
      setContent(<FollowContent />);
    }
  };
  const onAccountInfoClick = () => {
    if (content !== <AccountContent />) {
      setContent(<AccountContent />);
    }
  };
  useEffect(() => {
    myProfile();
  }, []);

  const myProfile = async () => {
    try {
      const response = await getMyProfile(accessToken);
      setProfile(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };
  console.log();

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
                <span>팔로워 12명</span>
                <span>팔로우 7명</span>
                <span>내가 쓴 꿈 일기 {share_dream_count}개</span>
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
        <div>{content}</div>
      </S.ProfileContent>
    </>
  );
};

export default ProfilePage;
