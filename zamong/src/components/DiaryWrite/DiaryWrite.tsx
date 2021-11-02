import React, { useEffect, useRef, useState } from "react";
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
import { diaryWritePost, diaryWritePut } from "../../utils/api/DiaryWrite";
import { useHistory } from "react-router";
import uri from "../../constance/uri";
import ElapsedTime from "./component/ElapsedTime/ElapsedTime";
import { AxiosResponse } from "axios";
import { diaryWriteResponse } from "../../models/dto/response/diaryWriteResponse";

type PropertysType = {
  title: string;
  content: string;
  date: Date;
  startTime: Time;
  endTime: Time;
  quality: Code;
  types: DreamTypeType[];
};

const qualitys: Code[] = [
  {
    code: "BEST",
    name: "😚 아주 좋아요",
  },
  {
    code: "GOOD",
    name: "🙂 좋아요",
  },
  {
    code: "SOSO",
    name: "😐 그저 그래요",
  },
  {
    code: "BAD",
    name: "☹️ 안좋아요",
  },
  {
    code: "WORST",
    name: "😬 아주 안좋아요",
  },
];

interface PropsType {
  dreamUUID: string | null;
}

const dateToString = (date: Date): string => {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")}`;
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
  return `${(time.hour + (time.type === AM ? 0 : 12)).toString().padStart(2, "0")}:${time.minute
    .toString()
    .padStart(2, "0")}:00`;
};

const DiaryWrite = ({ dreamUUID }: PropsType): JSX.Element => {
  const MAXTITLE = 100;
  const isPostRef = useRef(false); //저장할 때 post 요청이여야하는지 put요청이여야 하는지 정하는 boolean
  const { current: isPost } = isPostRef;
  const { push } = useHistory();
  const init = (): PropertysType => {
    const initValue: PropertysType = {
      title: "",
      content: "",
      date: new Date(),
      startTime: { type: AM, hour: 0, minute: 0 },
      endTime: { type: AM, hour: 7, minute: 0 },
      quality: qualitys[2],
      types: [],
    };

    if (dreamUUID != null) {
      //만약 꿈 식별자가 쿼리스트링에 있으면
      isPostRef.current = true; //post를 이미 했다고 한다
    }

    return initValue;
  };
  const [properties, setProperties] = useState<PropertysType>(init());
  const [file, setFile] = useState<File | undefined>();
  const setPropertiesWithName =
    <T extends unknown>(name: string) =>
    (value: T) => {
      setProperties({ ...properties, [name]: value });
    };

  const setDate = setPropertiesWithName<Date>("date");
  const setStartTime = setPropertiesWithName<Time>("startTime");
  const setEndTime = setPropertiesWithName<Time>("endTime");
  const setQuality = setPropertiesWithName<Code>("quality");
  const setTypes = setPropertiesWithName<DreamTypeType[]>("types");

  const { title, content, date, startTime, endTime, quality, types } = properties;

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "title" && value.length > MAXTITLE) {
      setProperties({ ...properties, [name]: value.substring(0, MAXTITLE) });
    } else {
      setProperties({ ...properties, [name]: value });
    }
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

  const getRequestData = (): diaryWriteRequest => {
    const [start, end] = toDateTime();
    const dreamTypes = types.map((value) => {
      return value.code;
    });

    return {
      title: title,
      content: content,
      dream_types: dreamTypes,
      quality: quality.code,
      sleep_begin_datetime: start,
      sleep_end_datetime: end,
    };
  };

  const [lastUpdateDate, setLastUpdateDate] = useState<Date | null>(null);

  const onSave = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const ifMap = new Map<boolean, Promise<AxiosResponse<diaryWriteResponse>>>()
      .set(true, diaryWritePost(getRequestData())) //post 요청일 때
      .set(false, diaryWritePut(getRequestData(), dreamUUID!)); //put 요청일때
    try {
      const response = await ifMap.get(!isPost)!;
      const { updated_at, uuid } = response.data.content.response;

      setLastUpdateDate(new Date(updated_at));
      push(`/diary/write?dreamUUID=${uuid}`);
      isPostRef.current = true;
      alert("저장 완료");
    } catch (error) {
      console.log(error);
      alert("오류가 발생했습니다.");
    }
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
              <S.TitleCount color={title.length >= MAXTITLE ? color.red : color.gray}>
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
                <DreamQuality qualityState={[quality, setQuality]} qualitys={qualitys} />
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
            {lastUpdateDate && (
              <S.LastChange>
                마지막 저장&nbsp;
                <ElapsedTime from={lastUpdateDate} interval={1000}></ElapsedTime> 전
              </S.LastChange>
            )}
            <S.BorderButton onClick={onSave}>저장</S.BorderButton>
            <S.BlueButton>작성</S.BlueButton>
          </S.ButtonContainer>
        </S.WriteSection>
      </S.ContentContainer>
    </>
  );
};

export default DiaryWrite;
