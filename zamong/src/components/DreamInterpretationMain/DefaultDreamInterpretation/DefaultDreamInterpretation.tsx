import { useState } from "react";
import { color } from "../../../style/color";
import Slider from "../../MainPage/Slider/Slider";
import * as S from "./styles";

const DefaultDreamInterpretation = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  return (
    <S.ContentInner>
      <S.Subtitle>기본 꿈 풀이</S.Subtitle>
      <Slider
        size={6}
        columnCount={4}
        gap={20}
        pageState={[page, setPage]}
        indexState={[index, setIndex]}
      >
        {[1, 2, 3, 4, 5, 6].map((_, index) => {
          return (
            <div style={{ width: "100%", backgroundColor: color.gray }} key={index}>
              qwejk
            </div>
          );
        })}
      </Slider>
    </S.ContentInner>
  );
};

export default DefaultDreamInterpretation;
