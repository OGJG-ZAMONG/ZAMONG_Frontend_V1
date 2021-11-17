import FollowDreamDiary from "../../../CardDream/FollowDreamDiary/FollowDreamDiary";
import * as I from "../style";
import * as G from "../../styles";
import { useLayoutEffect, useRef, useState } from "react";
import { getFollowShareDream } from "../../../../utils/api/Main";
import { shareDreamRequest } from "../../../../models/dto/request/shareDreamRequest";
import { Dream } from "../../../../models/dto/response/shareDreamResponse";
import Slider from "../../Slider/Slider";

const FollowDreamDiaryList = (): JSX.Element => {
  const pageSize = 8;
  const COLUMN_COUNT = 4;
  const [page, setPage] = useState(0);
  const [dreamList, setDreamList] = useState<Dream[]>([]);
  const [index, setIndex] = useState<number>(0);

  const getFollowShareDreamList = async () => {
    try {
      const param: shareDreamRequest = {
        size: pageSize,
        page: page,
      };

      const { share_dreams } = (await getFollowShareDream(param)).data.content.response;

      setDreamList(dreamList.concat(share_dreams));
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getFollowShareDreamList();
  }, [page]);

  const dreamListRender = dreamList.map((value) => {
    return <FollowDreamDiary dream={value} />;
  });

  return (
    <>
      {dreamList.length > 0 && (
        <I.Container>
          <G.SectionTitle>팔로우의 최신 꿈 일기</G.SectionTitle>
          <I.Container>
            <Slider
              columnCount={COLUMN_COUNT}
              indexState={[index, setIndex]}
              pageState={[page, setPage]}
              gap={20}
              size={dreamList.length}
            >
              {dreamListRender}
            </Slider>
          </I.Container>
        </I.Container>
      )}
    </>
  );
};

export default FollowDreamDiaryList;
