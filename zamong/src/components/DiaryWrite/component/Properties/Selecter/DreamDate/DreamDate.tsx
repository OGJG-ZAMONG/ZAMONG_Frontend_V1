import { useState } from "react";
import DatePicker from "../../../Picker/DatePicker/DatePicker";
import * as S from "../../../styles";
import TimePicker, { Time } from "../../../Picker/TimePicker/TimePicker";
import Selecter from "../Selecter/Selecter";
const DreamDate = (): JSX.Element => {
  const [nowDate, setNowDate] = useState(new Date());
  const [tempDate, setTempDate] = useState(new Date(nowDate));
  const [modal, setModal] = useState(false);

  const dateToString = (date: Date): string => {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  const Content = (): JSX.Element => {
    return (
      <>
        <S.Subtitle onClick={() => setModal(true)}>
          {dateToString(nowDate)}
        </S.Subtitle>
        {modal && (
          <DatePicker
            date={tempDate}
            setDate={setNowDate}
            setModal={setModal}
          />
        )}
      </>
    );
  };

  return (
    <>
      <Selecter title="꿈을 꾼 날짜" content={<Content />} />
    </>
  );
};

export default DreamDate;
