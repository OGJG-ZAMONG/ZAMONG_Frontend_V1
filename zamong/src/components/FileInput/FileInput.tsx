import { useState } from "react";
import { State } from "../DiaryWrite/model";
import * as S from "./styles";

type PropsType = {
  fileState: State<File | undefined>;
  id: string;
};

const FileInput = ({ fileState, id }: PropsType): JSX.Element => {
  const [file, setFile] = fileState;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };

  return (
    <>
      <S.Container>
        {/* <S.Title>사진 추가</S.Title> */}
        <S.InputContainer>
          <S.Label htmlFor={id}>사진 선택</S.Label>
          <S.Input
            id={id}
            type="file"
            accept=".jpg,.png"
            onChange={onChangeHandler.bind(this)}
          />
          <div>{file === undefined ? "선택되지 않음" : file?.name}</div>
        </S.InputContainer>
      </S.Container>
    </>
  );
};

export default FileInput;
