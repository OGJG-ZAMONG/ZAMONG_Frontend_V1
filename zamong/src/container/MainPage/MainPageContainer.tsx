import React, { Suspense } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const MainPage = React.lazy(() => import("../../components/MainPage/MainPage"));

const MainPageContainer = (): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Header />
      <MainPage />
      <Footer />
    </Suspense>
  );
};

export default MainPageContainer;
