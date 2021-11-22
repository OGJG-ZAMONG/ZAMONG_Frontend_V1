import React, { useEffect, useState } from "react";
import { color } from "../../../../../style/color";
import * as S from "./styles";
import { HEIGHT } from "../model";

type DateColumnType = {
  type: string;
  array: Array<number | string>;
  initValue: number | string;
  setValue: (value: number | string) => void;
};

const PickerColumn = ({ type, array, initValue, setValue }: DateColumnType): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(array.indexOf(initValue));
  const [timer, setTimer] = useState<NodeJS.Timeout>(setTimeout(() => {}, 0));
  const [y, setY] = useState(-(selectedIndex * HEIGHT));
  const [isWheel, setIsWheel] = useState(false);

  const OFFSET = HEIGHT * 2;

  const CalculateOpacity = (index: number, selectedIndex: number): number => {
    var offset: number = Math.abs(selectedIndex - index);
    return (50 - offset * 25 + 50) / 100;
  };

  const CalculateIndex = (y: number): number => {
    var index = Math.round(y / HEIGHT);

    if (index > 0) {
      return 0;
    }
    index = Math.abs(index);

    if (index > array.length - 1) {
      return array.length - 1;
    } else {
      return Math.abs(Math.round(y / HEIGHT));
    }
  };

  const onTimeout = (): void => {
    setIsWheel(false);
  };

  useEffect(() => {
    setY(-(selectedIndex * HEIGHT));
  }, [isWheel]);

  useEffect(() => {
    console.log("ASD");
    console.log(array[selectedIndex]);
    setValue(array[selectedIndex]);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex >= array.length) {
      const index = array.length - 1;
      setSelectedIndex(index);
      setY(-(index * HEIGHT));
    }
  }, [array]);

  const CalculateY = (y: number, value: number): number => {
    var temp = y + value;
    if (temp > 0) {
      return 0;
    } else if (HEIGHT * (array.length + 1) * -1 + OFFSET > temp) {
      return HEIGHT * (array.length + 1) * -1 + OFFSET;
    } else {
      return temp;
    }
  };

  const onWheelHandler = (event: React.WheelEvent<HTMLDivElement>) => {
    clearTimeout(timer);
    setIsWheel(true);
    let value = event.deltaY;
    if (Math.abs(value) === 100) {
      value = 18 * Math.sign(value);
    }

    const calcY = CalculateY(y, value);
    setY(calcY);

    const index = CalculateIndex(calcY);
    setSelectedIndex(index);

    setTimer(setTimeout(onTimeout, 100));
  };

  const onClickHandler = (index: number) => {
    setY(-(index * HEIGHT));
    setSelectedIndex(index);
  };

  return (
    <S.DateColumn height={HEIGHT} onWheel={onWheelHandler}>
      <S.DateColumnInner y={y + OFFSET} isWheel={isWheel}>
        {array.map((value, index) => {
          return (
            <S.DateCell
              isWheel={isWheel}
              key={index}
              color={selectedIndex === index ? color.white : color.gray}
              onClick={() => onClickHandler(index)}
              height={HEIGHT}
              angle={(selectedIndex - index) * 25}
              opacity={CalculateOpacity(index, selectedIndex)}
            >
              {value}
              {type}
            </S.DateCell>
          );
        })}
      </S.DateColumnInner>
    </S.DateColumn>
  );
};

export default PickerColumn;
