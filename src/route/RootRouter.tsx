import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
// const MainRouter = React.lazy(() => import("./MainRouter"));
import MainRouter from "./MainRouter";

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
        <MainRouter />  
    </BrowserRouter>
  );
};

export default RootRouter;
