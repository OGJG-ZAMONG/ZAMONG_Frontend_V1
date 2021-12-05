import { FC } from "react";
import { AuthBackground } from "../../components/Common/index";
import ChangePassword from "../../components/ChangePassword/ChangePassword";

const ChangePasswordContainer: FC = (): JSX.Element => {
  return (
    <>
      <AuthBackground />
      <ChangePassword />
    </>
  );
};

export default ChangePasswordContainer;
