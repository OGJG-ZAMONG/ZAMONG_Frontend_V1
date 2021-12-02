import React, { FC, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import {
  LoginContainer,
  DiaryContainer,
  SignUpContainer,
  MainContainer,
  SellDreamContainer,
  DiaryWriteContainer,
  DiaryDetailContainer,
  SellManagementContainer,
  DreamInterpretationMainContainer,
  ProfileContainter,
  SearcgContainter,
  FindPasswordContainer,
  AnoTherProfileContainter,
  SellDetailContainer,
  SellWriteContainer,
  InterpretationWriteContainer,
  ChatContainer,
} from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/diary" component={DiaryContainer} />
        <Route exact path="/diary/write" component={DiaryWriteContainer} />
        <Route path="/diary/detail/:uuid" component={DiaryDetailContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/sell" component={SellDreamContainer} />
        <Route exact path="/sell/write" component={SellWriteContainer} />
        <Route exact path="/chat" component={ChatContainer} />
        <Route exact path="/findpassword" component={FindPasswordContainer} />
        <Route exact path="/interpretation/write" component={InterpretationWriteContainer} />
        <Route exact path="/interpretation" component={DreamInterpretationMainContainer} />
        <Route exact path="/profile" component={ProfileContainter} />
        <Route exact path="/sell/management" component={SellManagementContainer} />
        <Route exact path="/search" component={SearcgContainter} />
        <Route exact path="/user/:uuid" component={AnoTherProfileContainter} />
        <Route path="/sell/detail/:uuid" component={SellDetailContainer} />
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
