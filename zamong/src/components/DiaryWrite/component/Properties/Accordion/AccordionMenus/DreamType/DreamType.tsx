import Accordion from "../../Accordion/Accordion";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { DreamTypeType } from "../../../../../../../constance/dreamType";
import { State } from "../../../../../model";

type PropsType = {
  typesState: State<DreamTypeType[]>;
};

const DreamType = ({ typesState }: PropsType): JSX.Element => {
  const [selected, setSelected] = typesState;
  const dreamTypeCompareFunction = (
    a: DreamTypeType,
    b: DreamTypeType
  ): number => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    }
    return 0;
  };

  const deleteItem = (index: number) => {
    setSelected(
      selected.filter((item, i) => index !== i).sort(dreamTypeCompareFunction)
    );
  };

  const insertItem = (item: DreamTypeType) => {
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
