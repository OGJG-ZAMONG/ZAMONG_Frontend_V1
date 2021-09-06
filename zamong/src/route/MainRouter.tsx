import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginContainer, DiaryContainer, SignupContainer } from "../container";
const MainRouter:FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainContainer}/>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/diary" component={DiaryContainer} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
