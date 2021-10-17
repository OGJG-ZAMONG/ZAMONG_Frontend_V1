import React, { Suspense, FC } from "react";
import ProfilePage from "../../components/Profile/ProfilePage";

const ProfileContainter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <ProfilePage />
    </Suspense>
  );
};

export default ProfileContainter;
