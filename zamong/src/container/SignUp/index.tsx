import { FC } from "react";
import { AuthBackground } from "../../components/Common/index";
import SignUp from "../../components/SignUp/SignUpST/SignUp"

const SignUpContainer: FC = (): JSX.Element => {
  return (
    <>
      <AuthBackground />
      <SignUp />
    </>
  );
};

export default SignUpContainer;
