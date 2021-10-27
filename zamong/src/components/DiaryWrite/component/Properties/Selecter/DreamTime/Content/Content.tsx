import { useEffect, useState } from "react";
import { color } from "../../../../../../../style/color";
import TimePicker, { AM, Time } from "../../../../Picker/TimePicker/TimePicker";
import * as S from "../../../../styles";

export type State<T> = {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
};

type PropsType = {
  startState: State<Time>;
  endState: State<Time>;
  invalidState: State<boolean>;
};

const Content = ({
  startState,
  endState,
  invalidState,
}: PropsType): JSX.Element => {
  const { state: startTime, setState: setStartTime } = startState;
  const { state: endTime, setState: setEndTime } = endState;
  const { state: isInvalid, setState: setIsInvalid } = invalidState;

  const [startModal, setStartModal] = useState(false);
  const [endModal, setEndModal] = useState(false);

  const timeToString = (time: Time): string => {
    const { hour, minute, type } = time;

    return `${hour + (type === AM ? 0 : 12)}:${(minute + "").padStart(2, "0")}`;
  };

  const checkTimeValueIsValid = () => {
    const startMinute =
      (startTime.hour + (startTime.type === AM ? 0 : 12)) * 60 +
      startTime.minute;

    const endMinute =
      (endTime.hour + (endTime.type === AM ? 0 : 12)) * 60 + endTime.minute;

    setIsInvalid(startMinute >= endMinute);
  };

  useEffect(() => {
    checkTimeValueIsValid();
  }, [startTime, endTime]);

  return (
    <S.Container color={isInvalid ? color.red : color.lightGray}>
      <S.TimePickerItem onClick={() => setStartModal(true)}>
        {timeToString(startTime)} 부터
      </S.TimePickerItem>
      {startModal && (
        <TimePicker
          time={startTime}
          setTime={setStartTime}
          setModal={setStartModal}
        />
      )}
      <S.TimePickerItem onClick={() => setEndModal(true)}>
        &nbsp;{timeToString(endTime)} 까지
      </S.TimePickerItem>
      {endModal && (
        <TimePicker
          time={endTime}
          setTime={setEndTime}
          setModal={setEndModal}
        />
      )}
    </S.Container>
  );
};

export default Content;
