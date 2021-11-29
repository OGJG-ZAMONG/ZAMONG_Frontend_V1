import { useLayoutEffect, useRef, useState } from "react";
import { State } from "../../DiaryWrite/model";
import * as S from "./styles";

interface PropsType {
  children: React.ReactNode;
  size: number;
  columnCount: number;
  gap: number;
  indexState: State<number>;
  pageState: State<number>;
}

const Slider = ({ children, size, gap, columnCount, indexState, pageState }: PropsType) => {
  const [index, setIndex] = indexState;
  const [page, setPage] = pageState;

  const container = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const [x, setX] = useState<number>(0);

  const moveIndex = (offset: number) => {
    const changeIndex = index + offset;

    if (changeIndex < 0 || changeIndex > size - columnCount) {
      return;
    }

    if (changeIndex > size - columnCount - 1) {
      setPage(page + 1);
    }

    setIndex(changeIndex);
  };

  const onNext = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    moveIndex(1);
  };

  const onPrev = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    moveIndex(-1);
  };

  useLayoutEffect(() => {
    const itemWidth = (container.current?.clientWidth! - (columnCount - 1) * gap) / columnCount;
    list.current!.style.width = `${itemWidth * size + (size - 1) * gap}px`;
  }, [children]);

  useLayoutEffect(() => {
    const itemWidth = (container.current?.clientWidth! - (columnCount - 1) * gap) / columnCount;
    setX((itemWidth + gap) * index);
  }, [index]);

  return (
    <div>
      <S.Container ref={container}>
        <S.List ref={list} x={-x} gap={gap}>
          {children}
        </S.List>
      </S.Container>
      {index !== 0 && (
        <S.Button onClick={onPrev} left={0}>
          
        </S.Button>
      )}
      {size - columnCount !== index && (
        <S.Button onClick={onNext} left={100}>
          
        </S.Button>
      )}
    </div>
  );
};

export default Slider;
