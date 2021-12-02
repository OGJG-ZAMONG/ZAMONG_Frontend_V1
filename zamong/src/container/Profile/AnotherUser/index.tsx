import React, { Suspense, FC } from "react";
import ProfilePage from "../../../components/Profile/AnotherUser/AnotherProfilePage";
import Header from "../../../components/Header/Header";
import { useLocation } from "react-router";
import { RouteComponentProps } from "react-router-dom";

const AnoTherProfileContainter: FC<RouteComponentProps<{ uuid: string }>> = ({
  match,
}): JSX.Element => {
  const { uuid } = match.params;

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Header />
      <ProfilePage id={uuid} />
    </Suspense>
  );
};

export default AnoTherProfileContainter;
