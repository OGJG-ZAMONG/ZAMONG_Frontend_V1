import Find from "./Find/Find";
import Change from "./Change/Change";
import { useState } from "react";

const FindPassword = () => {
  const [index, setIndex] = useState(0);

  const onNext = () => {
    if (index < 2) {
      setIndex(index + 1);
    }
  };

  const onPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const FindPassword:JSX.Element[] = [
    <Find />,
    <Change />
  ]

  return (FindPassword[1]);
};

export default FindPassword;
