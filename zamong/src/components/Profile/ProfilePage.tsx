import React, { useState } from "react";
import * as S from "./style";
import { Profile, Follower, Follow, AccountInfo } from "../../assets";
import FollowerContent from "./Follower/FollowerContent";
import FollowContent from "./Follow/FollowContent";
import AccountContent from "./Account/AccountContent";

const ProfilePage = (): JSX.Element => {
  const [followerColor, setFollowerColor] = useState("white");
  const [followColor, setFollowColor] = useState("black");
  const [accountColor, setAccountcolorColor] = useState("black");
  const [comp, setComp] = useState();
  const onFollowerClick = () => {
    if (followColor === "white" || accountColor === "white") {
      setFollowerColor("black");
    } else {
      followerColor === "white"
        ? setFollowerColor("black")
        : setFollowerColor("white");
    }
  };
  const onFollowClick = () => {
    followColor === "black" ? setFollowColor("white") : setFollowColor("black");
  };
  const onAccountInfoClick = () => {
    accountColor === "black"
      ? setAccountcolorColor("white")
      : setAccountcolorColor("black");
  };
  return (
    <>
      <S.ProfileContent>
        <S.TopBox>
          <S.TopContent>
            <S.ProfileBox img={Profile} />
            <S.InfoBox>
              <S.NickNameText>dms_jingenun04</S.NickNameText>
              <S.EmailText>2014kjg@dsm.hs.kr</S.EmailText>
              <S.OneLineBox>
                <span>팔로워 12명</span>
                <span>팔로우 7명</span>
                <span>내가 쓴 꿈 일기 18개</span>
                <span>86LUCY</span>
              </S.OneLineBox>
              <S.NameBox>이름: 김진근</S.NameBox>
            </S.InfoBox>
          </S.TopContent>
        </S.TopBox>
        <S.SelectionBox>
          <S.SelectionContent>
            <S.ChooseBox1
              onClick={onFollowerClick}
              followerColor={followerColor}
            >
              <div>
                <img src={Follower} />
                <span>팔로워</span>
              </div>
            </S.ChooseBox1>
            <S.ChooseBox2 onClick={onFollowClick} followColor={followColor}>
              <div>
                <img src={Follow} />
                <span>팔로우</span>
              </div>
            </S.ChooseBox2>
            <S.ChooseBox3
              onClick={onAccountInfoClick}
              accountColor={accountColor}
            >
              <div>
                <img src={AccountInfo} />
                <span>계정 정보</span>
              </div>
            </S.ChooseBox3>
          </S.SelectionContent>
        </S.SelectionBox>
        <FollowerContent />
      </S.ProfileContent>
    </>
  );
};

export default ProfilePage;
