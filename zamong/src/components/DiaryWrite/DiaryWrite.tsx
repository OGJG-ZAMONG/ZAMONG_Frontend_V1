import React, { useEffect, useState } from "react";
import { DreamTypeType } from "../../constance/dreamType";
import { color } from "../../style/color";
import FileInput from "../FileInput/FileInput";
import DreamType from "./component/Properties/Accordion/AccordionMenus/DreamType/DreamType";
import DreamDate from "./component/Properties/Selecter/DreamDate/DreamDate";
import DreamQuality from "./component/Properties/Selecter/DreamQuality/DreamQuality";
import DreamTime from "./component/Properties/Selecter/DreamTime/DreamTime";
import { AM, Code, Time } from "./model";
import * as S from "./styles";
import { diaryWriteRequest } from "../../models/dto/request/diaryWriteRequest";

type PropertysType = {
  title: string;
  content: string;
};

const qualitys: Code[] = [
  {
    code: "BST",
    name: "😚 아주 좋아요",
  },
  {
    code: "GD",
    name: "🙂 좋아요",
  },
  {
    code: "SO",
    name: "😐 그저 그래요",
  },
  {
    code: "BD",
    name: "☹️ 안좋아요",
  },
  {
    code: "WST",
    name: "😬 아주 안좋아요",
  },
];

const DiaryWrite = (): JSX.Element => {
  const MAXTITLE = 100;

  const [properties, setProperties] = useState<PropertysType>({
    title: "",
    content: "",
  });
  const [file, setFile] = useState<File | undefined>();
  const [date, setDate] = useState<Date>(new Date());
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
  const [quality, setQuality] = useState<Code>(qualitys[2]);
  const [types, setTypes] = useState<DreamTypeType[]>([]);

  const { title, content } = properties;
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "title" && value.length > MAXTITLE) {
      setProperties({ ...properties, [name]: value.substring(0, MAXTITLE) });
    } else {
      setProperties({ ...properties, [name]: value });
    }
  };

  const dateToString = (date: Date): string => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const getMinutes = (time: Time): number => {
    return (time.hour + (time.type === AM ? 0 : 12)) * 60 + time.minute;
  };

  const compareTime = (a: Time, b: Time): number => {
    const aMins = getMinutes(a);
    const bMins = getMinutes(b);

    if (aMins > bMins) return 1;
    else if (aMins < bMins) return -1;
    return 0;
  };

  const timeToString = (time: Time): string => {
    return `${(time.hour + (time.type === AM ? 0 : 12))
      .toString()
      .padStart(2, "0")}-${time.minute.toString().padStart(2, "0")}-00`;
  };

  const toDateTime = (): [string, string] => {
    const offset = compareTime(endTime, startTime) === -1 ? 1 : 0;
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + offset);

    return [
      `${dateToString(date)}T${timeToString(startTime)}`,
      `${dateToString(endDate)}T${timeToString(endTime)}`,
    ];
  };

  const getRequestDate = (): diaryWriteRequest => {
    const [start, end] = toDateTime();
    const dreamTypes = types.map((value) => {
      return value.code;
    });

    return {
      title: title,
      content: content,
      dream_types: dreamTypes,
      quality: quality.name,
      sleep_begin_datetime: start,
      sleep_end_datetime: end,
    };
  };

  return (
    <>
      <S.ContentContainer>
        <S.WriteSection>
          <S.Title>꿈 작성하기</S.Title>
          <S.MarginConatiner>
            <div>
              <S.Subtitle>꿈 제목</S.Subtitle>
              <S.TextArea
                onChange={onChangeHandler}
                name="title"
                value={title}
                placeholder="제목 입력..."
              />
              <S.TitleCount
                color={title.length >= MAXTITLE ? color.red : color.gray}
              >
                {title.length} / {MAXTITLE}
              </S.TitleCount>
            </div>
            <div>
              <S.Subtitle>꿈 상세</S.Subtitle>
              <S.DetailMarginConatiner>
                <DreamDate dateState={[date, setDate]} />
                <DreamTime
                  startState={[startTime, setStartTime]}
                  endState={[endTime, setEndTime]}
                />
                <DreamQuality
                  qualityState={[quality, setQuality]}
                  qualitys={qualitys}
                />
                <DreamType typesState={[types, setTypes]} />
              </S.DetailMarginConatiner>
            </div>
            <div>
              <S.Subtitle>꿈 내용</S.Subtitle>
              <S.TextAreaContent
                onChange={onChangeHandler}
                name="content"
                value={content}
                placeholder="내용 입력..."
              />
              <FileInput file={file} setFile={setFile} id="diary" />
            </div>
          </S.MarginConatiner>
          <S.ButtonContainer>
            <S.LastChange>마지막 저장 8분전</S.LastChange>
            <S.BorderButton>저장</S.BorderButton>
            <S.BlueButton>작성</S.BlueButton>
          </S.ButtonContainer>
        </S.WriteSection>
      </S.ContentContainer>
    </>
  );
};

export default DiaryWrite;
