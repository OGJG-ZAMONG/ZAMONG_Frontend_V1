import { useLayoutEffect, useRef, useState } from "react";
import * as S from "./styles";

interface PropsType {
  children: React.ReactNode;
  index: number;
  size: number;
  columnCount: number;
  gap: number;
}

const Slider = ({ children, index, size, gap, columnCount }: PropsType) => {
  const container = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const [x, setX] = useState<number>(0);

  useLayoutEffect(() => {
    const itemWidth = (container.current?.clientWidth! - (columnCount - 1) * gap) / columnCount;
    list.current!.style.width = `${itemWidth * size + (size - 1) * gap}px`;
  }, [children]);

  useLayoutEffect(() => {
    const itemWidth = (container.current?.clientWidth! - (columnCount - 1) * gap) / columnCount;
    setX((itemWidth + gap) * index);
  }, [index]);

  return (
    <S.Container ref={container}>
      <S.List ref={list} x={-x}>
        {children}
      </S.List>
    </S.Container>
  );
};

export default Slider;
