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

const PickerColumn = ({
  type,
  array,
  initValue,
  setValue,
}: DateColumnType): JSX.Element => {
  const tempType = type + "";
  const [tempArray, setTempArray] = useState<Array<number | string>>(
    array.slice()
  );
  const [selectedIndex, setSelectedIndex] = useState(
    tempArray.indexOf(initValue)
  );
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

    if (index > tempArray.length - 1) {
      return tempArray.length - 1;
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

  const CalculateY = (y: number, value: number): number => {
    var temp = y + value;
    if (temp > 0) {
      return 0;
    } else if (HEIGHT * (tempArray.length + 1) * -1 + OFFSET > temp) {
      return HEIGHT * (tempArray.length + 1) * -1 + OFFSET;
    } else {
      return temp;
    }
  };

  const onWheelHandler = (event: React.WheelEvent<HTMLDivElement>) => {
    clearTimeout(timer);
    setIsWheel(true);
    var value = event.deltaY;
    if (Math.abs(value) === 100) {
      value = 18 * Math.sign(value);
    }

    setY(CalculateY(y, value));
    setSelectedIndex(CalculateIndex(y));
    setTimer(setTimeout(onTimeout, 100));
  };

  const onClickHandler = (index: number, value: string | number) => {
    setY(-(index * HEIGHT));
    setSelectedIndex(index);
    setValue(value);
  };

  return (
    <S.DateColumn height={HEIGHT} onWheel={onWheelHandler}>
      <S.DateColumnInner y={y + OFFSET} isWheel={isWheel}>
        {tempArray.map((value, index) => {
          return (
            <S.DateCell
              isWheel={isWheel}
              key={index}
              color={selectedIndex === index ? color.white : color.gray}
              onClick={() => onClickHandler(index, value)}
              height={HEIGHT}
              angle={(selectedIndex - index) * 25}
              opacity={CalculateOpacity(index, selectedIndex)}
            >
              {value}
              {tempType}
            </S.DateCell>
          );
        })}
      </S.DateColumnInner>
    </S.DateColumn>
  );
};

export default PickerColumn;
