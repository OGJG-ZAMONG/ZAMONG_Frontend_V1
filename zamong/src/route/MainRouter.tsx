import React, { FC, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import {
  LoginContainer,
  DiaryContainer,
  SignupContainer,
  MainContainer,
  SellDreamContainer,
  DiaryWriteContainer,
} from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/diary" component={DiaryContainer} />
        <Route exact path="/diary/write" component={DiaryWriteContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/sell" component={SellDreamContainer} />
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
