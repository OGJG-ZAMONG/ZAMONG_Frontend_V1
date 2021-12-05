import MyDreamDiary from "../../../CardDream/MyDreamDiary/MyDreamDiary";
import { getMyDreamDiary } from "../../../../utils/api/Main";
import * as I from "../style";
import * as G from "../../styles";
import Slider from "../../Slider/Slider";
import { useLayoutEffect, useState } from "react";
import { Dream } from "../../../../models/dto/response/shareDreamResponse";
import { myDiaryRequest } from "../../../../models/dto/request/myDiaryRequest";
import CardSkeleton from "../../../CardSkeleton/CardSkeleton";

const MyDreamDiaryList = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [dreams, setDreams] = useState<Dream[] | null>(null);
  const nnDreams = dreams || []; //null이 아닌 list

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
      setDreams(nnDreams.concat(share_dreams));
    } catch (error) {
      console.log(error);
    }
  };

  const dreamRender = nnDreams.map((value, index) => {
    const { default_posting_image: img, is_shared: locked, title, created_at: date, uuid } = value;

    return (
      <MyDreamDiary key={index} img={img} locked={locked} title={title} date={date} uuid={uuid} />
    );
  });

  const renderSkeleton = [1, 2, 3, 4].map((_, index) => {
    return <CardSkeleton key={index} />;
  });

  useLayoutEffect(() => {
    setMyDiary();
  }, [page]);

  return (
    <>
      {(nnDreams.length > 0 || !dreams) && (
        <I.Container>
          <G.SectionTitle>최근 적은 꿈 일기</G.SectionTitle>
          <Slider
            indexState={[index, setIndex]}
            pageState={[page, setPage]}
            size={nnDreams.length}
            gap={GAP}
            columnCount={COLUMN_COUNT}
          >
            {dreams ? dreamRender : renderSkeleton}
          </Slider>
        </I.Container>
      )}
    </>
  );
};

export default MyDreamDiaryList;
