import * as S from "./styles";

interface PropsType {
  placeholder: string;
}

const TextEditor = ({ placeholder = "" }: PropsType): JSX.Element => {
  
  return (
    <>
      <S.Container
        contentEditable="true"
        placeholder={placeholder}
      ></S.Container>
    </>
  );
};

export default TextEditor;
