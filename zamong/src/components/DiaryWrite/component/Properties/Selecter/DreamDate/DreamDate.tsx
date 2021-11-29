import { useEffect, useState } from "react";
import { State } from "../../../../model";
import DatePicker from "../../../Picker/DatePicker/DatePicker";
import * as S from "../../../styles";
import Selecter from "../Selecter/Selecter";

type PropsType = {
  dateState: State<Date>;
};

const DreamDate = ({ dateState }: PropsType): JSX.Element => {
  const [nowDate, setNowDate] = dateState;
  const [modal, setModal] = useState(false);

  const dateToString = (date: Date): string => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const Content = (): JSX.Element => {
    return (
      <>
        <S.Subtitle onClick={() => setModal(true)}>{dateToString(nowDate)}</S.Subtitle>
        {modal && <DatePicker date={nowDate} setDate={setNowDate} setModal={setModal} />}
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
