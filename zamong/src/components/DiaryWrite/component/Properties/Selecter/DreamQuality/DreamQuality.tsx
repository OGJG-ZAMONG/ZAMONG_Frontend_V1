import { useEffect, useRef, useState } from "react";
import Selecter from "../Selecter/Selecter";
import { color } from "../../../../../../style/color";
import ItemContent from "./ItemContent/ItemContent";
import { Code, State } from "../../../../model";

type PropsType = {
  qualityState: State<Code>;
  qualitys: Code[];
};

const DreamQuality = ({ qualityState, qualitys }: PropsType): JSX.Element => {
  const GAP = 16;
  const { state: quality, setState: setQuality } = qualityState;
  // const [quality, setQuality] = useState<Code>(qualitys[2]);

  return (
    <>
      <Selecter
        title="꿈의 품질"
        content={
          <ItemContent
            array={qualitys}
            gap={GAP}
            initValue={quality}
            setValue={setQuality}
          />
        }
      />
    </>
  );
};

export default DreamQuality;
