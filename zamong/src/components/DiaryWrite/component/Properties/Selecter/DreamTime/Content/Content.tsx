import { useEffect, useState } from "react";
import { color } from "../../../../../../../style/color";
import { AM, State, Time } from "../../../../../model";
import TimePicker from "../../../../Picker/TimePicker/TimePicker";
import * as S from "../../../../styles";

type PropsType = {
  startState: State<Time>;
  endState: State<Time>;
};

const Content = ({ startState, endState }: PropsType): JSX.Element => {
  const [startTime, setStartTime] = startState;
  const [endTime, setEndTime] = endState;

  const [startModal, setStartModal] = useState(false);
  const [endModal, setEndModal] = useState(false);

  const timeToString = (time: Time): string => {
    const { hour, minute, type } = time;

    return `${hour + (type === AM ? 0 : 12)}:${(minute + "").padStart(2, "0")}`;
  };

  return (
    <S.Container>
      <S.Subtitle onClick={() => setStartModal(true)}>
        {timeToString(startTime)} 부터
      </S.Subtitle>
      {startModal && (
        <TimePicker
          time={startTime}
          setTime={setStartTime}
          setModal={setStartModal}
        />
      )}
      <S.Subtitle onClick={() => setEndModal(true)}>
        &nbsp;{timeToString(endTime)} 까지
      </S.Subtitle>
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
