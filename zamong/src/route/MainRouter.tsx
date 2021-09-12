import React, { FC, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
const MainContainer = React.lazy(() => import('../container/Diary'))
const LoginContainer = React.lazy(() => import('../container/Login'))
const DiaryContainer = React.lazy(() => import('../container/MainPage'))
const SignupContainer = React.lazy(() => import('../container/Signup'))

const MainRouter:FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Switch>
        <Route exact path="/" component={MainContainer}/>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/diary" component={DiaryContainer} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
