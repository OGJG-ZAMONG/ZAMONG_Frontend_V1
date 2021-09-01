import React, { Suspense, FC } from "react";
import { AuthBackground } from "../../common/index";
const Signup = React.lazy(() => import("../../components/Signup/1/Signup"));

const SignupContainer: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <AuthBackground />
      <Signup />
    </Suspense>
  );
};

export default SignupContainer;
