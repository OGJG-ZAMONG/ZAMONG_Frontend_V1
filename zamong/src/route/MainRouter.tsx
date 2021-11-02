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
  ProfileContainter,
  FindPasswordContainer,
} from "../container";
import ChatContainer from "../container/Chat/ChatContainer";
import SellWriteContainer from "../container/SellWrite";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/diary" component={DiaryContainer} />
        <Route exact path="/diary/write" component={DiaryWriteContainer} />
        <Route exact path="/diary/detail" component={DiaryDetailContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/sell" component={SellDreamContainer} />
        <Route exact path="/sell/write" component={SellWriteContainer} />
        <Route exact path="/chat" component={ChatContainer} />
        <Route exact path="/profile" component={ProfileContainter} />
        <Route exact path="/findpassword" component={FindPasswordContainer} />
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
