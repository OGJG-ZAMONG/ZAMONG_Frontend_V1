import * as I from "../DiaryWrite/styles";
import DreamType from "../DiaryWrite/component/Properties/Accordion/AccordionMenus/DreamType/DreamType";
import { useLayoutEffect, useState } from "react";
import { color } from "../../style/color";
import InputPrice from "./component/InputPrice/InputPrice";
import FileInput from "../FileInput/FileInput";
import Code from "../../interface/Code";
import { useHistory } from "react-router";
import { postSellDream } from "../../utils/api/SellWrite";
import { sellWriteResponse } from "../../models/dto/request/sellWriteResquest";
import { dreamShareImagePost } from "../../utils/api/DiaryWrite";

const SellWrite = (): JSX.Element => {
  const MAXTITLE = 100;
  const { push } = useHistory();

  useLayoutEffect(() => {
    //새로고침시 확인 여부 묻기
    window.onbeforeunload = function () {
      return "Are you really want to perform the action?";
    };

    return () => {
      window.onbeforeunload = function () {};
    };
  }, []);

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
    price: 0,
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

  const onCancel = () => {
    if (window.confirm("작성한 정보를 모두 잃게 됩니다. 취소하시겠습니까?")) {
      push("/sell");
    }
  };

  const saveFile = async (uuid: string) => {
    if (file) {
      try {
        await dreamShareImagePost(file, uuid);
      } catch (error) {
        console.log(error);
        alert("파일 업로드에 실패했습니다.");
      }
    }
  };

  const onWrite = async () => {
    if (window.confirm("작성하시겠습니까?")) {
      const dream_types = types.map((value) => value.code);

      const data: sellWriteResponse = {
        title: title,
        content: content,
        dream_types: dream_types,
        cost: price,
      };

      try {
        const { uuid } = (await postSellDream(data)).data.content.response;
        saveFile(uuid);

        alert("작성 완료.");
        push("/sell");
      } catch (error) {
        alert("작성 실패.");
      }
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
              <I.TitleCount color={title.length >= MAXTITLE ? color.red : color.gray}>
                {title.length} / {MAXTITLE}
              </I.TitleCount>
            </div>
            <div>
              <I.Subtitle>꿈 상세</I.Subtitle>
              <I.DetailMarginConatiner>
                <DreamType typesState={[types, setTypes]} />
                <InputPrice price={price} setPrice={setPrice} />
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
            <I.BorderButton onClick={onCancel}>취소</I.BorderButton>
            <I.BlueButton onClick={onWrite}>작성</I.BlueButton>
          </I.ButtonContainer>
        </I.WriteSection>
      </I.ContentContainer>
    </>
  );
};

export default SellWrite;
