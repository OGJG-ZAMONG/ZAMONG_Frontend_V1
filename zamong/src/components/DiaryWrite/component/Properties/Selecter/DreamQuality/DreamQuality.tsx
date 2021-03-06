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
  const [isHover, setIsHover] = useState<boolean>(false);
  const onEnterHandler = () => setIsHover(true);
  const onLeaveHandler = () => setIsHover(false);

  return (
    <>
      <Selecter
        onHover={{ onEnter: onEnterHandler, onLeave: onLeaveHandler }}
        title="κΏμ νμ§"
        content={
          <ItemContent
            array={qualitys}
            gap={GAP}
            initValue={quality}
            setValue={setQuality}
            isHover={isHover}
          />
        }
      />
    </>
  );
};

export default DreamQuality;
