import { useLayoutEffect, useRef } from "react";
import * as S from "./styles";

interface PropsType {
  children: React.ReactNode;
  index: number;
  size: number;
}

const GAP = 20;

const Slider = ({ children, index, size }: PropsType) => {
  const container = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const itemWidth = container.current?.clientWidth! / 4;
    console.log(itemWidth);

    list.current!.style.width = `${itemWidth * size + GAP / 4}px`;
  }, [children]);

  return (
    <S.Container ref={container}>
      <S.List ref={list} size={size}>
        {children}
      </S.List>
    </S.Container>
  );
};

export default Slider;
