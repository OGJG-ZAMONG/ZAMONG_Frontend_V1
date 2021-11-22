import MyDreamDiary from "../../../CardDream/MyDreamDiary/MyDreamDiary";
import { getMyDreamDiary } from "../../../../utils/api/Main";
import * as I from "../style";
import * as G from "../../styles";
import Slider from "../../Slider/Slider";
import { useLayoutEffect, useState } from "react";
import { Dream } from "../../../../models/dto/response/shareDreamResponse";
import { myDiaryRequest } from "../../../../models/dto/request/myDiaryRequest";

const MyDreamDiaryList = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [dreams, setDreams] = useState<Dream[]>([]);

  const GAP = 20;
  const COLUMN_COUNT = 4;

  const setMyDiary = async () => {
    const param: myDiaryRequest = {
      page: page,
      size: 8,
      sort: "created",
      shared: false,
    };

    try {
      const { share_dreams } = (await getMyDreamDiary(param)).data.content.response;
      setDreams(dreams.concat(share_dreams));
    } catch (error) {
      console.log(error);
    }
  };

  const dreamRender = dreams.map((value, index) => {
    const { default_posting_image: img, is_shared: locked, title, created_at: date, uuid } = value;

    return (
      <MyDreamDiary key={index} img={img} locked={locked} title={title} date={date} uuid={uuid} />
    );
  });

  useLayoutEffect(() => {
    setMyDiary();
  }, [page]);

  return (
    <>
      {dreams.length > 0 && (
        <I.Container>
          <G.SectionTitle>최근 적은 꿈 일기</G.SectionTitle>
          <Slider
            indexState={[index, setIndex]}
            pageState={[page, setPage]}
            size={dreams.length}
            gap={GAP}
            columnCount={COLUMN_COUNT}
          >
            {dreamRender}
          </Slider>
        </I.Container>
      )}
    </>
  );
};

export default MyDreamDiaryList;
