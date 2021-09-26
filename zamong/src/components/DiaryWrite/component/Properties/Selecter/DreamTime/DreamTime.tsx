import TimePicker, { Time } from "../../../Picker/TimePicker/TimePicker";
import Selecter from "../Selecter/Selecter";
import * as S from "../../../styles";
import { useState } from "react";

const DreamTime = (): JSX.Element => {
  const Content = (): JSX.Element => {
    const [startModal, setStartModal] = useState(false);
    const [endModal, setEndModal] = useState(false);
    const [startTime, setStartTime] = useState<Time>({
      hour: 0,
      minute: 0,
    });

    const [endTime, setEndTime] = useState<Time>({
      hour: 7,
      minute: 0,
    });

    const timeToString = (time: Time): string => {
      const { hour, minute } = time;

      return `${hour}:${(minute + "").padStart(2, "0")}`;
    };
    return (
      <>
        <S.Subtitle onClick={() => setStartModal(true)}>
          {timeToString(startTime)} 부터
        </S.Subtitle>
        {startModal && <TimePicker time={startTime} setModal={setStartModal} />}
        <S.Subtitle onClick={() => setEndModal(true)}>
          &nbsp;{timeToString(endTime)} 까지
        </S.Subtitle>
        {endModal && <TimePicker time={endTime} setModal={setEndModal} />}
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
