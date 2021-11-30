import { useState } from "react";
import { DefaultDreamInterpretations } from "../../../constance/defaultDreamInterpretations";
import { color } from "../../../style/color";
import DefaultDreamInterpretationCard from "../../CardDream/DefaultDreamInterpretationCard/DefaultDreamInterpretationCard";
import Slider from "../../MainPage/Slider/Slider";
import * as S from "./styles";

const DefaultDreamInterpretation = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  return (
    <S.ContentInner>
      <S.Subtitle>기본 꿈 풀이</S.Subtitle>
      <Slider
        size={DefaultDreamInterpretations.length}
        columnCount={4}
        gap={20}
        pageState={[page, setPage]}
        indexState={[index, setIndex]}
      >
        {DefaultDreamInterpretations.map((value) => {
          const { image, title, content } = value;
          return <DefaultDreamInterpretationCard image={image} title={title} content={content} />;
        })}
      </Slider>
    </S.ContentInner>
  );
};

export default DefaultDreamInterpretation;
