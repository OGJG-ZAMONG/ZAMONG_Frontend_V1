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

  const moveIndex = (offset: number) => {
    const changeIndex = index + offset;

    if (changeIndex < 0 || changeIndex > dreamList.length - COLUMN_COUNT) {
      return;
    }

    if (changeIndex > dreamList.length - COLUMN_COUNT - 1) {
      setPage(page + 1);
    }

    setIndex(changeIndex);
  };

  const dreamListRender = dreamList.map((value) => {
    return <FollowDreamDiary dream={value} />;
  });

  const onPrev = () => moveIndex(-1);
  const onNext = () => moveIndex(1);

  return (
    <>
      {dreamList.length > 0 && (
        <I.Container>
          <G.SectionTitle>팔로우의 최신 꿈 일기</G.SectionTitle>
          <Slider columnCount={COLUMN_COUNT} gap={20} index={index} size={dreamList.length}>
            {dreamListRender}
          </Slider>
          <I.Button onClick={onPrev} left={0}>
            
          </I.Button>
          <I.Button onClick={onNext} left={100}>
            
          </I.Button>
        </I.Container>
      )}
    </>
  );
};

export default FollowDreamDiaryList;
