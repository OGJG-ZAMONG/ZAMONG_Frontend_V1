import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
const MainRouter = React.lazy(() => import("./MainRouter"));

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <MainRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
