import { useLayoutEffect, useRef, useState } from "react";
import Delusional from "../../interface/Delusional";
import DelusionalImage from "./DelusionalImage/DelusionalImage";
import * as S from "./styles";

const Background = (): JSX.Element => {
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  };

  const [imageList, setImageList] = useState<Delusional[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastYRef = useRef<number>(0);
  const isLeftRef = useRef<boolean>(false);

  const { current: lastY } = lastYRef;
  const { current: isLeft } = isLeftRef;
  const offset = window.screen.height * 0.8;

  const onScrollHandler = () => {
    const scrollY = window.scrollY * 0.4;
    const screenBottom = scrollY + window.screen.height * 0.8;

    if (containerRef.current) {
      containerRef.current.style.top = `${-scrollY}px`;
    }

    if (screenBottom >= lastY + offset) {
      const id = getRandomInt(1, 21).toString();
      const left = isLeft ? 0 : 100;
      const img = import(`../../assets/delusional/delusional${id}.png`);

      lastYRef.current = lastY + offset;
      isLeftRef.current = !isLeft;

      setImageList(
        imageList.concat({ left: left, url: img, top: lastY + offset })
      );
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, [imageList]);

  return (
    <S.Container>
      <S.Inner ref={containerRef}>
        {imageList.map((value, index) => {
          const { top, left, url } = value;
          return (
            <DelusionalImage top={top} left={left} url={url} key={index} />
          );
        })}
      </S.Inner>
    </S.Container>
  );
};

export default Background;
