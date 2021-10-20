import Selecter from "../../../DiaryWrite/component/Properties/Selecter/Selecter/Selecter";
import * as S from "./styles";
const InputPrice = (): JSX.Element => {
  const Content = (): JSX.Element => {
    return (
      <>
        <S.Container>
          <S.Input placeholder="가격 입력" type="number" />
          <S.Won>₩</S.Won>
        </S.Container>
      </>
    );
  };
  return <Selecter title="꿈의 가격" content={<Content />}></Selecter>;
};

export default InputPrice;
