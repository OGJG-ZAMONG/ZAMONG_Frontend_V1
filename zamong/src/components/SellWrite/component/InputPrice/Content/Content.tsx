import * as S from "../styles";

interface PropsType {
  price: number;
  setPrice: (price: number) => void;
}

const Content = ({ price, setPrice }: PropsType): JSX.Element => {
  const isNumeric = (data: string): boolean => {
    return !isNaN(Number(data));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (isNumeric(value)) {
      if (value === "") {
        setPrice(0);
      } else {
        setPrice(parseInt(value));
      }
    }
  };

  return (
    <>
      <S.Container>
        <S.Input placeholder="가격 입력" value={price} onChange={onChangeHandler} />
        <S.Won>₩</S.Won>
      </S.Container>
    </>
  );
};

export default Content;
