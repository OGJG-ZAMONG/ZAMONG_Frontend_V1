import React, { useEffect, useState } from "react";
import { color } from "../../style/color";
import FileInput from "../FileInput/FileInput";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DreamType from "./component/Properties/Accordion/AccordionMenus/DreamType/DreamType";
import DreamDate from "./component/Properties/Selecter/DreamDate/DreamDate";
import DreamQuality from "./component/Properties/Selecter/DreamQuality/DreamQuality";
import DreamTime from "./component/Properties/Selecter/DreamTime/DreamTime";
import * as S from "./styles";

const DiaryWrite = (): JSX.Element => {
  const MAXTITLE = 100;
  interface propertysType {
    title: string;
    content: string;
  }

  const [properties, setProperties] = useState<propertysType>({
    title: "",
    content: "",
  });
  const [file, setFile] = useState<File | undefined>();

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
                <DreamDate />
                <DreamTime />
                <DreamQuality />
                <DreamType />
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
