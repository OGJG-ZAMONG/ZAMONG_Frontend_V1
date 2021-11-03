import React, { useState } from "react";
import * as S from "./style";
import { Profile, Follower, Follow, AccountInfo } from "../../assets";
import FollowerContent from "./Follower/FollowerContent";
import FollowContent from "./Follow/FollowContent";
import AccountContent from "./Account/AccountContent";

const ProfilePage = (): JSX.Element => {
  const [comp, setComp] = useState();
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
  return (
    <>
      {FollowerContent}
      {FollowContent}
      {AccountContent}
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
