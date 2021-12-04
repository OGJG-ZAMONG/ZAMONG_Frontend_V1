import FollowDreamDiary from "../../../CardDream/FollowDreamDiary/FollowDreamDiary";
import * as I from "../style";
import * as G from "../../styles";
import { useLayoutEffect, useRef, useState } from "react";
import { getFollowShareDream } from "../../../../utils/api/Main";
import { shareDreamRequest } from "../../../../models/dto/request/shareDreamRequest";
import { Dream } from "../../../../models/dto/response/shareDreamResponse";
import Slider from "../../Slider/Slider";
import CardSkeleton from "../../../CardSkeleton/CardSkeleton";

const FollowDreamDiaryList = (): JSX.Element => {
  const pageSize = 8;
  const COLUMN_COUNT = 4;
  const [page, setPage] = useState(0);
  const [dreamList, setDreamList] = useState<Dream[] | null>(null);
  const [index, setIndex] = useState<number>(0);
  const nnDreamList = dreamList || [];

  const getFollowShareDreamList = async () => {
    try {
      const param: shareDreamRequest = {
        size: pageSize,
        page: page,
      };

      const { share_dreams } = (await getFollowShareDream(param)).data.content.response;

      setDreamList(nnDreamList.concat(share_dreams));
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getFollowShareDreamList();
  }, [page]);

  const dreamListRender = nnDreamList.map((value) => {
    return <FollowDreamDiary dream={value} />;
  });

  const renderSkeleton = [1, 2, 3, 4].map((_, index) => {
    return <CardSkeleton key={index} />;
  });

  return (
    <>
      {(nnDreamList.length > 0 || !dreamList) && (
        <I.Container>
          <G.SectionTitle>팔로우의 최신 꿈 일기</G.SectionTitle>
          <I.Container>
            <Slider
              columnCount={COLUMN_COUNT}
              indexState={[index, setIndex]}
              pageState={[page, setPage]}
              gap={20}
              size={nnDreamList.length}
            >
              {dreamList ? dreamListRender : renderSkeleton}
            </Slider>
          </I.Container>
        </I.Container>
      )}
    </>
  );
};

export default FollowDreamDiaryList;
