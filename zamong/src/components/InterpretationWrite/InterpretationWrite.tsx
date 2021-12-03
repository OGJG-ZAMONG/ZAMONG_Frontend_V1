import { useLayoutEffect, useRef, useState } from "react";
import Code from "../../interface/Code";
import { color } from "../../style/color";
import DreamType from "../DiaryWrite/component/Properties/Accordion/AccordionMenus/DreamType/DreamType";
import LucyInput from "./components/LucyInput/LucyInput";
import * as S from "./styles";
import * as I from "../DiaryWrite/styles";
import FileInput from "../FileInput/FileInput";
import { useHistory } from "react-router";
import DreamQuality from "../DiaryWrite/component/Properties/Selecter/DreamQuality/DreamQuality";
import { qualitys } from "../../constance/dreamQualitys";
import { postInterpretationRequest } from "../../models/dto/request/postInterpretationRequest";
import {
  getInterpretationDetail,
  postInterpretation,
  putInterpretation,
  Response,
} from "../../utils/api/InterpretationWrite";
import dreamType from "../../constance/dreamType";
import { dreamPostingImagePost } from "../../utils/api/DreamPosting";
import { AxiosResponse } from "axios";
import defaultResponse from "../../models/dto/response/defaultResponse";
import { getMyProfile } from "../../utils/api/Profile";

interface PropertiesType {
  title: string;
  types: Code[];
  lucy: number;
  content: string;
}

interface PropsType {
  uuid: string | null;
}

const InterpretationWrite = ({ uuid }: PropsType): JSX.Element => {
  const [properties, setProperties] = useState<PropertiesType>({
    title: "",
    types: [],
    lucy: 0,
    content: "",
  });

  const { push } = useHistory();

  const [file, setFile] = useState<File | undefined>();
  const [initImage, setInitImage] = useState<string>("");

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

  const onCancel = () => {
    if (window.confirm("작성한 정보를 모두 잃게 됩니다. 취소하시겠습니까?")) {
      push("/interpretation");
    }
  };

  const isValid = () => title.length > 0 && content.length > 0 && types.length > 0;

  const lucyCount = useRef<number | null>(null);

  const getLucyCount = async () => {
    try {
      const response = await getMyProfile();
      lucyCount.current = response.data.content.response.lucy_count;
    } catch (error) {
      console.log(error);
    }
  };

  const onPost = async () => {
    if (!isValid()) {
      alert("빈칸 또는 유형을 선택해주세요.");
      return;
    }

    const dreamTypes = types.map((value) => {
      return value.code;
    });

    const data: postInterpretationRequest = {
      content: content,
      dream_types: dreamTypes,
      lucy_count: lucy,
      title: title,
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

    const UUID = uuid || "";
    const funcMap = new Map<
      boolean,
      (
        data: postInterpretationRequest,
        uuid: string
      ) => Promise<AxiosResponse<defaultResponse<Response>>>
    >()
      .set(false, postInterpretation)
      .set(true, putInterpretation);
    const func = funcMap.get(uuid ? true : false)!;

    const str = uuid ? "수정" : "요청";

    try {
      const response = await func(data, UUID);
      await saveFile(response.data.content.response.uuid);
      alert(`${str}되었습니다.`);
      push("/interpretation");
    } catch (error) {
      alert("오류 발생.");
      console.log(error);
    }
  };

  const settingData = async () => {
    if (!uuid) {
      return;
    }

    try {
      const response = await getInterpretationDetail(uuid);
      const { attachment_image, dream_types, content, title, lucy_count } =
        response.data.content.response;
      const type = dreamType.filter((value) => dream_types.some((elem) => elem === value.code));

      const data: PropertiesType = {
        content: content,
        title: title,
        lucy: lucy_count,
        types: type,
      };

      setProperties(data);
      setInitImage(attachment_image);
    } catch (error) {
      alert("이전 데이터를 불러오는데 실패했습니다.");
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    settingData();
    getLucyCount();
  }, []);

  return (
    <S.Container>
      <S.ContentContainer>
        <S.Title>꿈 해몽 {uuid ? "수정" : "요청"}하기</S.Title>
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
        <div>
          <S.Subtitle>꿈 내용</S.Subtitle>
          <I.TextAreaContent
            onChange={onChangeHandler}
            name="content"
            value={content}
            placeholder="내용 입력..."
          />
          <FileInput file={file} setFile={setFile} id="sell" initPath={initImage} />
        </div>
      </S.ContentContainer>

      <I.ButtonContainer>
        <I.BorderButton onClick={onCancel}>취소</I.BorderButton>
        <I.BlueButton onClick={onPost}>{uuid ? "수정" : "요청"}</I.BlueButton>
      </I.ButtonContainer>
    </S.Container>
  );
};

export default InterpretationWrite;
