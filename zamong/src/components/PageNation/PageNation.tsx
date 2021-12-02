import { useState } from "react";
import State from "../../interface/State";
import * as S from "./styles";

interface PropsType {
  indexState: State<number>;
  max: number;
  columnCount: number;
}

const PageNation = ({ indexState, max, columnCount }: PropsType): JSX.Element => {
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [index, setIndex] = indexState;
  const onNext = () =>
    pageOffset !== Math.floor(max / columnCount) && setPageOffset(pageOffset + 1);
  const onPrev = () => pageOffset !== 0 && setPageOffset(pageOffset - 1);

  const renderPage = Array<number>(columnCount)
    .fill(0)
    .map((_, i) => {
      const realIndex = columnCount * pageOffset + i;

      if (realIndex < max)
        return realIndex === index ? (
          <S.Enable key={i}>{realIndex + 1}</S.Enable>
        ) : (
          <S.Div key={i} onClick={() => setIndex(realIndex)}>
            {realIndex + 1}
          </S.Div>
        );
      else return <div key={i}></div>;
    });

  return (
    <S.Container>
      <S.Div onClick={onPrev}> 이전</S.Div>
      {renderPage}
      <S.Div onClick={onNext}>다음 </S.Div>
    </S.Container>
  );
};

export default PageNation;
