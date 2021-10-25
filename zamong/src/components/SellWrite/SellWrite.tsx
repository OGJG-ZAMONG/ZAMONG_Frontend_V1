import * as S from "./styles";
import * as I from "../DiaryWrite/styles";
import DreamType from "../DiaryWrite/component/Properties/Accordion/AccordionMenus/DreamType/DreamType";
import { useState } from "react";
import { color } from "../../style/color";
import InputPrice from "./component/InputPrice/InputPrice";
import FileInput from "../FileInput/FileInput";
import { DreamTypeType } from "../../constance/dreamType";

const SellWrite = (): JSX.Element => {
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
      <I.ContentContainer>
        <I.WriteSection>
          <I.Title>꿈 판매글 작성하기</I.Title>
          <I.MarginConatiner>
            <div>
              <I.Subtitle>꿈 제목</I.Subtitle>
              <I.TextArea
                onChange={onChangeHandler}
                name="title"
                value={title}
                placeholder="제목 입력..."
              />
              <I.TitleCount
                color={title.length >= MAXTITLE ? color.red : color.gray}
              >
                {title.length} / {MAXTITLE}
              </I.TitleCount>
            </div>
            <div>
              <I.Subtitle>꿈 상세</I.Subtitle>
              <I.DetailMarginConatiner>
                <DreamType typesState={{ state: types, setState: setTypes }} />
                <InputPrice />
              </I.DetailMarginConatiner>
            </div>
            <div>
              <I.Subtitle>꿈 내용</I.Subtitle>
              <I.TextAreaContent
                onChange={onChangeHandler}
                name="content"
                value={content}
                placeholder="내용 입력..."
              />
              <FileInput file={file} setFile={setFile} id="sell" />
            </div>
          </I.MarginConatiner>
          <I.ButtonContainer>
            <I.BorderButton>취소</I.BorderButton>
            <I.BlueButton>작성</I.BlueButton>
          </I.ButtonContainer>
        </I.WriteSection>
      </I.ContentContainer>
    </>
  );
};

export default SellWrite;
