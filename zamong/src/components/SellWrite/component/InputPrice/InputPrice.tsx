import Selecter from "../../../DiaryWrite/component/Properties/Selecter/Selecter/Selecter";
import Content from "./Content/Content";
import * as S from "./styles";

interface PropsType {
  price: number;
  setPrice: (price: number) => void;
}

const InputPrice = ({ price, setPrice }: PropsType): JSX.Element => {
  return (
    <Selecter title="꿈의 가격" content={<Content price={price} setPrice={setPrice} />}></Selecter>
  );
};

export default InputPrice;
