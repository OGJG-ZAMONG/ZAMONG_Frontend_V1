import * as G from "../Modal/styles";
import * as S from "./styles";
import Modal from "../Modal/Modal";
import { getMaxDate, HEIGHT, toString, range, toNumber } from "../model";
import PickerColumn from "../PickerColunm/PickerColumn";
import { useEffect, useMemo, useState } from "react";

type PropsType = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DatePicker = ({ date, setDate, setModal }: PropsType): JSX.Element => {
  const tempDate = useMemo(() => date, []);

  const [realDate, setRealDate] = useState(new Date(tempDate));
  const [nowDate, setNowDate] = useState({
    year: tempDate.getFullYear(),
    month: tempDate.getMonth(),
    day: tempDate.getDate(),
  });

  useEffect(() => {
    setRealDate(
      new Date(`${nowDate.year}-${nowDate.month - 1}-${nowDate.day}`)
    );
  }, [nowDate]);

  return (
    <>
      <Modal setModal={setModal}>
        <G.ModalTitle>날짜 선택</G.ModalTitle>
        <S.ColumnContainer height={HEIGHT}>
          <PickerColumn
            array={range(1970, tempDate.getFullYear() + 1)}
            type="년"
            initValue={tempDate.getFullYear()}
            setValue={(value: number | string) => {
              setNowDate({ ...nowDate, year: toNumber(value) });
            }}
          />
          <PickerColumn
            array={range(1, 13)}
            type="월"
            initValue={tempDate.getMonth() + 1}
            setValue={(value: number | string) => {
              setNowDate({ ...nowDate, month: toNumber(value) });
            }}
          />
          <PickerColumn
            array={range(
              1,
              getMaxDate(realDate.getFullYear(), realDate.getMonth()) + 1
            )}
            type="일"
            initValue={tempDate.getDate()}
            setValue={(value: number | string) => {
              setNowDate({ ...nowDate, day: toNumber(value) });
            }}
          />
        </S.ColumnContainer>
      </Modal>
    </>
  );
};

export default DatePicker;
