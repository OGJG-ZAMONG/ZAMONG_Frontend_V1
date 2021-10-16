import * as G from "../Modal/styles";
import { ColumnContainer } from "../DatePicker/styles";
import Modal from "../Modal/Modal";
import { getMaxDate, HEIGHT, range, toNumber, toString } from "../model";
import PickerColumn from "../PickerColunm/PickerColumn";
import { useEffect, useMemo, useState } from "react";

export type Time = {
  hour: number;
  minute: number;
};

type PropsType = {
  time: Time;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TimePicker = ({ time, setModal }: PropsType): JSX.Element => {
  const tempDate = useMemo(() => time, []);
  const { hour, minute } = tempDate;
  const [type, setType] = useState("AM");
  const [nowTime, setNowTime] = useState<Time>({
    hour: hour,
    minute: minute,
  });

  return (
    <>
      <Modal setModal={setModal}>
        <G.ModalTitle>시간 선택</G.ModalTitle>
        <ColumnContainer height={HEIGHT}>
          <PickerColumn
            array={["AM", "PM"]}
            type=""
            initValue={type}
            setValue={(value: number | string) => {
              setType(toString(value));
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
