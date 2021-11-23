import * as G from "../Modal/styles";
import { ColumnContainer } from "../DatePicker/styles";
import Modal from "../Modal/Modal";
import { HEIGHT, range, toNumber, toString } from "../model";
import PickerColumn from "../PickerColunm/PickerColumn";
import { useEffect, useState } from "react";
import Time, { AM, PM } from "../../../../../interface/Time";

type PropsType = {
  time: Time;
  setTime: (time: Time) => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TimePicker = ({ time, setTime, setModal }: PropsType): JSX.Element => {
  const [nowTime, setNowTime] = useState<Time>({
    type: time.type,
    hour: time.hour,
    minute: time.minute,
  });
  const { hour, minute, type } = nowTime;

  return (
    <>
      <Modal
        setModal={setModal}
        closeEvent={() => {
          setTime({ ...nowTime });
        }}
      >
        <G.ModalTitle>시간 선택</G.ModalTitle>
        <ColumnContainer height={HEIGHT}>
          <PickerColumn
            array={[AM, PM]}
            type=""
            initValue={type}
            setValue={(value: number | string) => {
              setNowTime({ ...nowTime, type: toString(value) });
            }}
          />
          <PickerColumn
            array={range(0, 12)}
            type="시"
            initValue={hour}
            setValue={(value: number | string) => {
              setNowTime({ ...nowTime, hour: toNumber(value) });
            }}
          />
          <PickerColumn
            array={range(0, 60)}
            type="분"
            initValue={minute}
            setValue={(value: number | string) => {
              setNowTime({ ...nowTime, minute: toNumber(value) });
            }}
          />
        </ColumnContainer>
      </Modal>
    </>
  );
};

export default TimePicker;
