import Accordion from "../../Accordion/Accordion";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { useState } from "react";
import { DreamTypeType } from "../../../../../../../constance/dreamType";

const DreamType = (): JSX.Element => {
  const [selected, setSelected] = useState<DreamTypeType[]>([]);

  return (
    <>
      <Accordion
        padding={16}
        header={<Header selected={selected} setSelected={setSelected} />}
        content={<Content selected={selected} setSelected={setSelected} />}
      />
    </>
  );
};

export default DreamType;
