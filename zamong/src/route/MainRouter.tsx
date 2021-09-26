import { FC } from "react";
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
    <>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/diary" component={DiaryContainer} />
        <Route exact path="/diary/write" component={DiaryWriteContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/sell" component={SellDreamContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
