import React, { useLayoutEffect, useRef, useState } from "react";
import dreamType from "../../constance/dreamType";
import { color } from "../../style/color";
import FileInput from "../FileInput/FileInput";
import DreamType from "./component/Properties/Accordion/AccordionMenus/DreamType/DreamType";
import DreamDate from "./component/Properties/Selecter/DreamDate/DreamDate";
import DreamQuality from "./component/Properties/Selecter/DreamQuality/DreamQuality";
import DreamTime from "./component/Properties/Selecter/DreamTime/DreamTime";
import * as S from "./styles";
import { diaryWriteRequest } from "../../models/dto/request/diaryWriteRequest";
import { diaryWriteApiType, diaryWritePost, diaryWritePut } from "../../utils/api/DiaryWrite";
import { useHistory } from "react-router";
import ElapsedTime from "./component/ElapsedTime/ElapsedTime";
import Code from "../../interface/Code";
import Time, { AM, PM } from "../../interface/Time";
import { qualitys } from "../../constance/dreamQualitys";
import { getDreamDetail } from "../../utils/api/DreamDetail";
import { dreamPostingImagePost } from "../../utils/api/DreamPosting";
import { getDreamsWrittenToday } from "../../utils/api/Diary/MyDreams";

type PropertysType = {
  title: string;
  content: string;
  date: Date;
  startTime: Time;
  endTime: Time;
  quality: Code;
  types: Code[];
};

interface PropsType {
  dreamUUID: string | null;
}

const dateToString = (date: Date): string =>
  `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")}`;

const getMinutes = (time: Time): number =>
  (time.hour + (time.type === AM ? 0 : 12)) * 60 + time.minute;

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

const getTimeFromDate = (date: Date): Time => {
  const hour = date.getHours();
  const minute = date.getMinutes();

  return {
    type: hour < 12 ? AM : PM,
    hour: hour % 12,
    minute: minute,
  };
};

const DiaryWrite = ({ dreamUUID }: PropsType): JSX.Element => {
  const initValue: PropertysType = {
    title: "",
    content: "",
    date: new Date(),
    startTime: { type: AM, hour: 0, minute: 0 },
    endTime: { type: AM, hour: 7, minute: 0 },
    quality: qualitys[2],
    types: [],
  };
  const MAXTITLE = 100;
  const isPostRef = useRef(false); //저장할 때 post 요청이여야하는지 put요청이여야 하는지 정하는 boolean
  const { current: isPost } = isPostRef;
  const { push } = useHistory();
  const [initImage, setInitImage] = useState<string>("");
  const [properties, setProperties] = useState<PropertysType>(initValue);
  const [file, setFile] = useState<File | undefined>();
  const { title, content, date, startTime, endTime, quality, types } = properties;
  const [lastUpdateDate, setLastUpdateDate] = useState<Date | null>(null);
  const isPropertyValid = (): boolean => title.length > 0 && content.length > 0 && types.length > 0;

  const init = async (): Promise<PropertysType> => {
    let returnValue = { ...initValue };

    const savedDiaryString = localStorage.getItem("saved_diary");
    if (!dreamUUID && savedDiaryString) {
      const savedDiary: PropertysType = JSON.parse(savedDiaryString);
      const saveTime = localStorage.getItem("last_save_time") || new Date().toString();
      savedDiary.date = new Date(savedDiary.date);
      setLastUpdateDate(new Date(saveTime));

      returnValue = { ...savedDiary };
    }

    if (dreamUUID) {
      //만약 꿈 식별자가 쿼리스트링에 있으면
      isPostRef.current = true; //post를 이미 했다고 한다

      const uuidSavedDiaryString = localStorage.getItem(dreamUUID);
      if (uuidSavedDiaryString) {
        const savedDiary: PropertysType = JSON.parse(uuidSavedDiaryString);
        const saveTime =
          localStorage.getItem(`${dreamUUID}_last_save_time`) || new Date().toString();
        savedDiary.date = new Date(savedDiary.date);
        setLastUpdateDate(new Date(saveTime));

        returnValue = { ...savedDiary };

        return returnValue;
      }

      try {
        const response = await getDreamDetail(dreamUUID);
        const {
          updated_at,
          title,
          content,
          sleep_begin_date_time,
          sleep_end_date_time,
          quality,
          dream_types,
          attachment_image,
        } = response.data.content.response;

        setLastUpdateDate(new Date(updated_at));
        const qualityCode = qualitys.find((value) => value.code === quality)!;
        const date = new Date(sleep_begin_date_time);
        const startTime = getTimeFromDate(new Date(sleep_begin_date_time));
        const endTime = getTimeFromDate(new Date(sleep_end_date_time));
        const dreamTypes = dream_types.map(
          (value) => dreamType.find((item) => item.code === value)!
        );

        returnValue.title = title;
        returnValue.content = content;
        returnValue.date = date;
        returnValue.startTime = startTime;
        returnValue.endTime = endTime;
        returnValue.quality = qualityCode;
        returnValue.types = dreamTypes;

        setInitImage(attachment_image);
        return returnValue;
      } catch (error) {
        console.log(error);
        push("/diary/write");
        alert("이전 정보를 불러오는데 실패했습니다.");
      }
    }
    return returnValue;
  };

  const setPropertiesWithName =
    <T extends unknown>(name: string) =>
    (value: T) => {
      setProperties({ ...properties, [name]: value });
    };

  const setDate = setPropertiesWithName<Date>("date");
  const setStartTime = setPropertiesWithName<Time>("startTime");
  const setEndTime = setPropertiesWithName<Time>("endTime");
  const setQuality = setPropertiesWithName<Code>("quality");
  const setTypes = setPropertiesWithName<Code[]>("types");

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

  const saveFile = async (uuid: string) => {
    if (file) {
      try {
        await dreamPostingImagePost(file, uuid);
      } catch (error) {
        console.log(error);
        alert("파일 업로드에 실패했습니다.");
      }
    }
  };

  const onPost = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!isPropertyValid()) {
      alert("빈칸 또는 꿈의 유형을 채워주세요.");
      return false;
    }

    e.preventDefault();

    const ifMap = new Map<boolean, diaryWriteApiType>()
      .set(true, diaryWritePost) //post 요청일 때
      .set(false, diaryWritePut); //put 요청일때

    try {
      const response = await ifMap.get(!isPost)!(getRequestData(), dreamUUID!)!;
      const { updated_at, uuid } = response.data.content.response;

      setLastUpdateDate(new Date(updated_at));
      push(`/diary/write?dreamUUID=${uuid}`);
      isPostRef.current = true;

      alert("저장 완료");

      await saveFile(uuid);
      push(`/diary`);
      localStorage.removeItem("saved_diary");
    } catch (error) {
      console.log(error);
      alert("오류가 발생했습니다.");
    }
  };

  const onSave = () => {
    const objectString = JSON.stringify(properties);

    if (dreamUUID) {
      localStorage.setItem(dreamUUID, objectString);
      localStorage.setItem(`${dreamUUID}_last_save_time`, new Date().toString());
    } else {
      localStorage.setItem("saved_diary", objectString);
      localStorage.setItem("last_save_time", new Date().toString());
    }

    setLastUpdateDate(new Date());
    alert("임시 저장되었습니다.");
  };

  const checkIsLogin = () => {
    const expireAt = localStorage.getItem("expireAt");

    if (!expireAt) {
      push("/");
      return;
    }
  };

  useLayoutEffect(() => {
    checkIsLogin();
    init().then((response) => {
      setProperties(response);
    });
  }, []);

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
                <DreamQuality qualityState={[quality, setQuality]} />
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
              <FileInput file={file} setFile={setFile} id="diary" initPath={initImage} />
            </div>
          </S.MarginConatiner>
          <S.ButtonContainer>
            {lastUpdateDate && (
              <S.LastChange>
                마지막 저장&nbsp;
                <ElapsedTime from={lastUpdateDate} interval={1000}></ElapsedTime> 전
              </S.LastChange>
            )}
            <S.BorderButton onClick={onSave}>임시 저장</S.BorderButton>
            <S.BlueButton onClick={onPost}>작성</S.BlueButton>
          </S.ButtonContainer>
        </S.WriteSection>
      </S.ContentContainer>
    </>
  );
};

export default DiaryWrite;
