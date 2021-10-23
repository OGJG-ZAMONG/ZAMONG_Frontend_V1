import { useEffect, useRef, useState } from "react";
import Selecter from "../Selecter/Selecter";
import { color } from "../../../../../../style/color";
import ItemContent from "./ItemContent/ItemContent";

const DreamQuality = (): JSX.Element => {
  const qualitys = [
    "😚 아주 좋아요",
    "🙂 좋아요",
    "😐 그저 그래요",
    "☹️ 안좋아요",
    "😬 아주 안좋아요",
  ];

  const GAP = 16;
  const [quality, setQuality] = useState<string>(qualitys[2]);

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
