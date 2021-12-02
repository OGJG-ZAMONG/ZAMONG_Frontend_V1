import { useState } from "react";
import Code from "../../interface/Code";
import { color } from "../../style/color";
import DreamType from "../DiaryWrite/component/Properties/Accordion/AccordionMenus/DreamType/DreamType";
import LucyInput from "./components/LucyInput/LucyInput";
import * as S from "./styles";

interface PropertiesType {
  title: string;
  types: Code[];
  lucy: number;
  content: string;
}

const InterpretationWrite = (): JSX.Element => {
  const [properties, setProperties] = useState<PropertiesType>({
    title: "",
    types: [],
    lucy: 0,
    content: "",
  });

  const { title, content, lucy, types } = properties;
  const MAXTITLE = 100;

  const setPropertiesWithName =
    <T extends unknown>(name: string) =>
    (value: T) => {
      setProperties({ ...properties, [name]: value });
    };

  const setTypes = setPropertiesWithName<Code[]>("types");
  const setLucy = setPropertiesWithName<number>("lucy");

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const vMap = new Map().set("title", value.substring(0, MAXTITLE)).set("content", value);
    const v = vMap.get(name)!;

    setProperties({ ...properties, [name]: v });
  };

  return (
    <S.Container>
      <S.ContentContainer>
        <S.Title>꿈 해몽 요청하기</S.Title>
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
          <S.PropContainer>
            <DreamType typesState={[types, setTypes]} />
            <LucyInput lucy={lucy} setLucy={setLucy} />
          </S.PropContainer>
        </div>
      </S.ContentContainer>
    </S.Container>
  );
};

export default InterpretationWrite;
