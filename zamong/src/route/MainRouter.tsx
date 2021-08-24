import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
const MainRouter = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default MainRouter;
