import { useState } from "react";
import SignUpST from "../SignUp/SignUpST/SignUp";
import SignUpND from "../SignUp/SignUpND/SignUp";
import SignUpRD from "../SignUp/SingUpRD/SignUp";
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

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onRequest = () => {
    const data = {
      name: inputs.name,
      email: inputs.email,
      authentication_code: inputs.authEntication.toString().replaceAll(',',''),
      id: inputs.id,
      password: inputs.pw,
    };
    signUp(data);
  };

  const { name, email, pw, checkPw, id, authEntication } = inputs;

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

  const functions = {
    change: change,
    onNext: onNext,
    onPrev: onPrev,
    onRequest: onRequest,
  };

  const SignUpList: JSX.Element[] = [
    <SignUpST
      functions={functions}
      id={id}
      name={name}
      />,
      <SignUpND
      // functions={functions}
      onNext={onNext}
      onPrev={onPrev}
      change={change}
      email={email}
      pw={pw}
      checkPw={checkPw}
      />,
      <SignUpRD
      functions={functions}
      authEntication={authEntication}
    />,
  ];
  return <>{SignUpList[index]}</>;
};

export default SignUp;
