import { useState } from "react";
import SignUpST from "../SignUp/SignUpST/SignUp";
import SignUpND from "../SignUp/SignUpND/SignUp";
import SignUpRD from "../SignUp/SingUpRD/SignUp";
import { useHistory } from "react-router";
import { signUp } from "../../utils/api/SignUp";

const SignUp = () => {
  const [index, setIndex] = useState(0);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    authEntication: ["", "", "", "", "", ""],
    id: "",
    pw: "",
    checkPw: "",
  });
  const { push } = useHistory();

  const { name, email, pw, checkPw, id, authEntication } = inputs;

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onNext = () => {
    if (index < 3) {
      setIndex(index + 1);
    }
  };

  const onPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const onRequest = async () => {
    const data = {
      name: inputs.name,
      email: inputs.email,
      authentication_code: inputs.authEntication.toString().replaceAll(",", ""),
      id: inputs.id,
      password: inputs.pw,
    };
    try {
      await signUp(data);
      alert("회원가입을 축하드립니다!.");
      push("/login");
    } catch {
      alert("회원가입에 실패하셨습니다.");
    }
  };

  const functions = {
    change: change,
    onNext: onNext,
    onPrev: onPrev,
    onRequest: onRequest,
  };

  const SignUpList: JSX.Element[] = [
    <SignUpST functions={functions} id={id} name={name} />,
    <SignUpND functions={functions} email={email} pw={pw} checkPw={checkPw} />,
    <SignUpRD functions={functions} authEntication={authEntication} />,
  ];
  return <>{SignUpList[index]}</>;
};

export default SignUp;
