import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginContainer } from "../container";
const MainRouter:FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={LoginContainer} />
      </Switch>
    </>
  );
};

export default MainRouter;
