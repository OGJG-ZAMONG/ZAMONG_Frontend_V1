import MyDreamDiary from "../../../CardDream/MyDreamDiary/MyDreamDiary";
import * as I from "../style";
import * as G from "../../styles";
import Slider from "../../Slider/Slider";
import { useState } from "react";

const MyDreamDiaryList = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const GAP = 20;
  const COLUMN_COUNT = 4;
  const SIZE = 10;

  const moveIndex = (offset: number) => {
    const changeIndex = index + offset;

    if (changeIndex < 0 || changeIndex > SIZE - COLUMN_COUNT) {
      return;
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
  return (
    <I.Container>
      <G.SectionTitle>최근 적은 꿈 일기</G.SectionTitle>
      <Slider index={index} size={SIZE} gap={GAP} columnCount={COLUMN_COUNT}>
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
      </Slider>
      <I.Button onClick={onPrev} left={0}>
        
      </I.Button>
      <I.Button onClick={onNext} left={100}>
        
      </I.Button>
    </I.Container>
  );
};

export default MyDreamDiaryList;
