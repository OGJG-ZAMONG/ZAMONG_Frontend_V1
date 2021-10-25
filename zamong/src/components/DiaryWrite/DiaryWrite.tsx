import React, { useEffect, useState } from "react";
import { DreamTypeType } from "../../constance/dreamType";
import { color } from "../../style/color";
import FileInput from "../FileInput/FileInput";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DreamType from "./component/Properties/Accordion/AccordionMenus/DreamType/DreamType";
import DreamDate from "./component/Properties/Selecter/DreamDate/DreamDate";
import DreamQuality from "./component/Properties/Selecter/DreamQuality/DreamQuality";
import DreamTime from "./component/Properties/Selecter/DreamTime/DreamTime";
import { AM, Code, Time } from "./model";
import * as S from "./styles";

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
  const [timeInvalid, setTimeInvalid] = useState<boolean>(false);
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
                <DreamDate dateState={{ state: date, setState: setDate }} />
                <DreamTime
                  startState={{ state: startTime, setState: setStartTime }}
                  endState={{ state: endTime, setState: setEndTime }}
                  invalidState={{
                    state: timeInvalid,
                    setState: setTimeInvalid,
                  }}
                />
                <DreamQuality
                  qualityState={{ state: quality, setState: setQuality }}
                  qualitys={qualitys}
                />
                <DreamType typesState={{ state: types, setState: setTypes }} />
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
