import * as S from "../styles";

interface PropsType {
  lucy: number;
  setLucy: (lucy: number) => void;
}

const Content = ({ lucy, setLucy }: PropsType): JSX.Element => {
  const isNumeric = (data: string): boolean => {
    return !isNaN(Number(data));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (isNumeric(value)) {
      if (value === "") {
        setLucy(0);
      } else {
        setLucy(parseInt(value));
      }
    }
  };

  return (
    <>
      <S.Container>
        <S.Input placeholder="지급 LUCY 입력..." value={lucy} onChange={onChangeHandler} />
        <S.Won>· 123 LUCY 보유</S.Won>
      </S.Container>
    </>
  );
};

export default Content;
