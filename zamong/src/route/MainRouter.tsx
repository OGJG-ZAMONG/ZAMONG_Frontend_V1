import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginContainer, DiaryContainer } from "../container";
const MainRouter:FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/diary" component={DiaryContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
