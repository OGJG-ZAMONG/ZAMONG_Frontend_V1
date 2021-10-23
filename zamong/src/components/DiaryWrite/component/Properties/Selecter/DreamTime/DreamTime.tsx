import TimePicker, { AM, Time } from "../../../Picker/TimePicker/TimePicker";
import Selecter from "../Selecter/Selecter";
import * as S from "../../../styles";
import { useState } from "react";

const DreamTime = (): JSX.Element => {
  const Content = (): JSX.Element => {
    const [startModal, setStartModal] = useState(false);
    const [endModal, setEndModal] = useState(false);
    const [startTime, setStartTime] = useState<Time>({
      type: AM,
      hour: 0,
      minute: 0,
    });

    const [endTime, setEndTime] = useState<Time>({
      type: AM,
      hour: 7,
      minute: 0,
    });

    const timeToString = (time: Time): string => {
      const { hour, minute, type } = time;

      return `${hour + (type === AM ? 0 : 12)}:${(minute + "").padStart(
        2,
        "0"
      )}`;
    };
    return (
      <>
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
      </>
    );
  };

  return (
    <>
      <Selecter title="수면 시각" content={<Content />} />
    </>
  );
};

export default DreamTime;
