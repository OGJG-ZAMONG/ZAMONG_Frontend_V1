import { useEffect, useRef, useState } from "react";
import Selecter from "../Selecter/Selecter";
import { color } from "../../../../../../style/color";
import ItemContent from "./ItemContent/ItemContent";
import { State } from "../../../../model";
import Code from "../../../../../../interface/Code";
import { qualitys } from "../../../../../../constance/dreamQualitys";

type PropsType = {
  qualityState: State<Code>;
};

const DreamQuality = ({ qualityState }: PropsType): JSX.Element => {
  const GAP = 16;
  const [quality, setQuality] = qualityState;
  // const [quality, setQuality] = useState<Code>(qualitys[2]);

  return (
    <>
      <Selecter
        title="꿈의 품질"
        content={
          <ItemContent array={qualitys} gap={GAP} initValue={quality} setValue={setQuality} />
        }
      />
    </>
  );
};

export default DreamQuality;
