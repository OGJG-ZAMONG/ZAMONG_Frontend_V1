import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginContainer, SignupContainer } from "../container";
const MainRouter: FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        {/* <Route exact path="/register" component={RegisterContainer} /> */}
      </Switch>
    </>
  );
};

export default MainRouter;
