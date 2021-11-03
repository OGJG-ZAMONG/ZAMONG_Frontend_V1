import { read } from "fs";
import { useLayoutEffect, useState } from "react";
import { State } from "../DiaryWrite/model";
import * as S from "./styles";

type PropsType = {
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  id: string;
  initPath?: string;
};

const FileInput = ({ file, setFile, id, initPath }: PropsType): JSX.Element => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };
  const [path, setPath] = useState<string>(initPath ? initPath : "");
  const [isHover, setisHover] = useState<boolean>(false);

  useLayoutEffect(() => {
    const reader = new FileReader();

    if (file !== undefined) {
      file.arrayBuffer().then((arrayBuffer) => {
        const blob = new Blob([new Uint8Array(arrayBuffer)], { type: file.type });
        reader.readAsDataURL(blob);

        reader.onload = (e) => {
          if (typeof e.target?.result === "string") setPath(e.target?.result);
        };
      });
    }
    console.log(initPath);
  }, [file]);

  useLayoutEffect(() => {
    if (initPath) setPath(initPath);
  }, [initPath]);

  const getFileName = (): string => {
    if (file !== undefined) return file.name;
    if (path !== "") return "선택된 사진";
    else return "선택되지 않음";
  };

  return (
    <>
      <S.Container>
        <S.InputContainer>
          <S.Label htmlFor={id}>사진 선택</S.Label>
          <S.Input id={id} type="file" accept=".jpg,.png" onChange={onChangeHandler.bind(this)} />
          <S.PreviewContainer>
            <S.FileName
              onMouseEnter={() => setisHover(true)}
              onMouseLeave={() => setisHover(false)}
            >
              {getFileName()}
            </S.FileName>
            {path !== "" && (
              <S.PreviewImagecontainer isHover={isHover}>
                <S.PreviewImage alt="preview" src={path} />
              </S.PreviewImagecontainer>
            )}
          </S.PreviewContainer>
        </S.InputContainer>
      </S.Container>
    </>
  );
};

export default FileInput;
