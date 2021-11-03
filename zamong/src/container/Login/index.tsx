import { FC } from "react";
import { AuthBackground } from "../../components/Common/index";
import Login from "../../components/Login/Login"

const LoginContainer: FC = (): JSX.Element => {
  return (
    <>
      <AuthBackground />
      <Login />
    </>
  );
};

export default LoginContainer;
