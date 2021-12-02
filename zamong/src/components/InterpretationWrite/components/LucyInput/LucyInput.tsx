import Selecter from "../../../DiaryWrite/component/Properties/Selecter/Selecter/Selecter";
import Content from "./Content/Content";

interface PropsType {
  lucy: number;
  setLucy: (lucy: number) => void;
}

const LucyInput = ({ lucy, setLucy }: PropsType): JSX.Element => {
  return <Selecter title="지급 LUCY" content={<Content lucy={lucy} setLucy={setLucy} />} />;
};

export default LucyInput;
