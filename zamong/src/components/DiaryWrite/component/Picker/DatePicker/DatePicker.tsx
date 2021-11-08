import * as G from "../Modal/styles";
import * as S from "./styles";
import Modal from "../Modal/Modal";
import { getMaxDate, HEIGHT, range, toNumber } from "../model";
import PickerColumn from "../PickerColunm/PickerColumn";
import { useEffect, useState } from "react";

type PropsType = {
  date: Date;
  setDate: (date: Date) => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DatePicker = ({ date, setDate, setModal }: PropsType): JSX.Element => {
  const [nowDate, setNowDate] = useState({
    // Picker Column으로 넘기는 값 객체
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  });
  const { year, month } = nowDate;

  const [dayArray, setDayArray] = useState<number[]>(
    range(1, getMaxDate(year, month) + 1)
  );

  useEffect(() => {
    //모달이 꺼질때 값 설정
    return () =>
      setNowDate((oldData) => {
        setDate(new Date(`${oldData.year}-${oldData.month}-${oldData.day}`));
        return oldData;
      });
  }, []);

  useEffect(() => {
    //nowDate가 바뀌면 바뀐 월에 따라 day array는 바뀌어야 한다
    const max = getMaxDate(year, month);
    setDayArray(range(1, max + 1));
  }, [nowDate]);

  return (
    <>
      <Modal setModal={setModal}>
        <G.ModalTitle>날짜 선택</G.ModalTitle>
        <S.ColumnContainer height={HEIGHT}>
          <PickerColumn
            array={range(1970, new Date().getFullYear() + 1)}
            type="년"
            initValue={date.getFullYear()}
            setValue={(value: number | string) => {
              setNowDate({ ...nowDate, year: toNumber(value) });
            }}
          />
          <PickerColumn
            array={range(1, 13)}
            type="월"
            initValue={date.getMonth() + 1}
            setValue={(value: number | string) => {
              setNowDate({ ...nowDate, month: toNumber(value) });
            }}
          />
          <PickerColumn
            array={dayArray}
            type="일"
            initValue={date.getDate()}
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
