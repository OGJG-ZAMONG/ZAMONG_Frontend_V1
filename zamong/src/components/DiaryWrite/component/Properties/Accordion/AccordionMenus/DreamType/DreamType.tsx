import Accordion from "../../Accordion/Accordion";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { State } from "../../../../../model";
import Code from "../../../../../../../interface/Code";

type PropsType = {
  typesState: State<Code[]>;
};

const DreamType = ({ typesState }: PropsType): JSX.Element => {
  const [selected, setSelected] = typesState;
  const dreamTypeCompareFunction = (a: Code, b: Code): number => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    }
    return 0;
  };

  const deleteItem = (index: number) => {
    setSelected(selected.filter((item, i) => index !== i).sort(dreamTypeCompareFunction));
  };

  const insertItem = (item: Code) => {
    setSelected(selected.concat(item));
  };

  return (
    <>
      <Accordion
        padding={16}
        header={<Header selected={selected} deleteItem={deleteItem} />}
        content={<Content selected={selected} insertItem={insertItem} />}
      />
    </>
  );
};

export default DreamType;
