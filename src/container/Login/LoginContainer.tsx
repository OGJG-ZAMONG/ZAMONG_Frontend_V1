import React, { Suspense, FC } from "react";
import { AuthBackground } from "../../common/index";
const Login = React.lazy(() => import("../../components/Login/Login"));

const LoginContainer: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <AuthBackground />
      <Login />
    </Suspense>
  );
};

export default LoginContainer;
