import { FC } from "react";
import { AuthBackground } from "../../common/index";
import Signup from "../../components/Signup/SignupST/Signup";

const SignupContainer: FC = (): JSX.Element => {
  return (
    <>
      <AuthBackground />
      <Signup />
    </>
  );
};

export default SignupContainer;
  