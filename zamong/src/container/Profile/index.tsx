import React, { Suspense, FC } from "react";
import ProfilePage from "../../components/Profile/ProfilePage";
import Header from "../../components/Header/Header";
const ProfileContainter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Header />
      <ProfilePage />
    </Suspense>
  );
};

export default ProfileContainter;
