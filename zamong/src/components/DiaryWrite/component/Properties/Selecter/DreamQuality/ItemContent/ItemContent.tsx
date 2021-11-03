import { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as I from "../styles";
import * as S from "../../../../styles";
import { color } from "../../../../../../../style/color";
import Code from "../../../../../../../interface/Code";

type PropsType = {
  array: Code[];
  initValue: Code;
  setValue: (code: Code) => void;
  gap: number;
  isHover: boolean;
};

const ItemContent = ({ array, initValue, setValue, gap, isHover }: PropsType): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number>(array.indexOf(initValue));
  const [lefts, setLefts] = useState<number[]>(Array<number>(array.length).fill(0));

  useEffect(() => {
    setValue(array[selected]);
  }, [selected]);

  useEffect(() => {
    if (isHover) {
      //마우스를 올리고 있으면 위치를 찾아간다.
      const children = container.current?.children;
      var sum = 0;
      const leftValues = Array<number>(array.length).fill(0);

      for (var i = 0; i < children!.length!; ++i) {
        const childElem = children?.item(i);
        leftValues[i] = sum;

        sum += childElem?.clientWidth! + gap;
      }

      setLefts([...leftValues]);
    } else {
      //마우스를 올리고 있지 않으면 left는 0
      setLefts(Array<number>(array.length).fill(0));
    }
  }, [isHover]);

  useLayoutEffect(() => {
    setSelected(array.indexOf(initValue));
  }, [initValue]);

  const onItemClickHandler = (index: number) => setSelected(index);
  const getOpacity = (index: number): number => {
    if (isHover) {
      return 1;
    } else {
      return index === selected ? 1 : 0;
    }
  };
  return (
    <>
      <I.SubTitleContainer ref={container}>
        {array.map((value, index) => {
          return (
            <I.Item
              left={lefts[index]}
              color={index === selected ? color.lightGray : color.gray}
              onClick={() => onItemClickHandler(index)}
              opacity={getOpacity(index)}
            >
              {value.name}
            </I.Item>
          );
        })}
      </I.SubTitleContainer>
    </>
  );
};

export default ItemContent;
