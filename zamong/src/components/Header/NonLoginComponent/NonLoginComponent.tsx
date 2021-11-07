import { Link } from "react-router-dom";
import * as S from "../styles";

const NonLoginComponent = (): JSX.Element => {
  return (
    <>
      <Link to="/login">
        <S.BlueButton>로그인</S.BlueButton>
      </Link>
      <Link to="/signup">
        <S.BorderButton>회원가입</S.BorderButton>
      </Link>
    </>
  );
};

export default NonLoginComponent;
