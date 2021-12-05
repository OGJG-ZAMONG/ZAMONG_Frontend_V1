import { FC } from "react";
import { AuthBackground } from "../../components/Common/index";
import Find from "../../components/FindPassword/FindPassword";

const FindPasswordContainer: FC = (): JSX.Element => {
  return (
    <>
      <AuthBackground />
      <Find />
    </>
  );
};

export default FindPasswordContainer;
