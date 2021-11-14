import * as S from "./styles";
import * as I from "../DiaryWrite/styles";
import DreamType from "../DiaryWrite/component/Properties/Accordion/AccordionMenus/DreamType/DreamType";
import { useState } from "react";
import { color } from "../../style/color";
import InputPrice from "./component/InputPrice/InputPrice";
import FileInput from "../FileInput/FileInput";
import Code from "../../interface/Code";

const SellWrite = (): JSX.Element => {
  const MAXTITLE = 100;

  interface propertysType {
    title: string;
    content: string;
    types: Code[];
    price: number;
  }

  const [properties, setProperties] = useState<propertysType>({
    title: "",
    content: "",
    types: [],
    price: -1,
  });

  const { title, content, types, price } = properties;

  const setPropertiesWithName =
    <T extends unknown>(name: string) =>
    (value: T) => {
      setProperties({ ...properties, [name]: value });
    };

  const setTypes = setPropertiesWithName<Code[]>("types");
  const setPrice = setPropertiesWithName<number>("price");

  const [file, setFile] = useState<File | undefined>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const valueMap = new Map<string, string>()
      .set("title", value.substring(0, MAXTITLE))
      .set("content", value);

    const v = valueMap.get(name)!;
    setPropertiesWithName<string>(name)(v);
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
              <I.TitleCount color={title.length >= MAXTITLE ? color.red : color.gray}>
                {title.length} / {MAXTITLE}
              </I.TitleCount>
            </div>
            <div>
              <I.Subtitle>꿈 상세</I.Subtitle>
              <I.DetailMarginConatiner>
                <DreamType typesState={[types, setTypes]} />
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
