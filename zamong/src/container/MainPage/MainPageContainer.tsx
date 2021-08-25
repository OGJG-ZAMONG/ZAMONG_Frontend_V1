import React, { Suspense } from "react";
const MainPage = React.lazy(() => import("../../components/MainPage/MainPage"));

const MainPageContainer = (): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <MainPage />
    </Suspense>
  );
};

export default MainPageContainer;
