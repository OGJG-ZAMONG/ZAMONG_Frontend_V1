import { useState } from "react";
import { AM, Time } from "../../../Picker/TimePicker/TimePicker";
import Selecter from "../Selecter/Selecter";
import Content, { State } from "./Content/Content";

const DreamTime = (): JSX.Element => {
  const [startTime, setStartTime] = useState<Time>({
    type: AM,
    hour: 0,
    minute: 0,
  });
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const [endTime, setEndTime] = useState<Time>({
    type: AM,
    hour: 7,
    minute: 0,
  });

  return (
    <>
      <Selecter
        title="수면 시각"
        content={
          <Content
            startState={{ state: startTime, setState: setStartTime }}
            endState={{ state: endTime, setState: setEndTime }}
            invalidState={{ state: isInvalid, setState: setIsInvalid }}
          />
        }
      />
    </>
  );
};

export default DreamTime;
