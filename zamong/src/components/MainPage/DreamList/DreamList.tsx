import * as S from "./styles";
import * as I from "../styles";
import Dream from "../../Dream/Dream";
import { DownChevron } from "../../../assets";
import { getShareDream } from "../../../utils/api/Main";
import { useEffect, useState, useRef } from "react";
import { DreamList as DreamType } from "../../../models/dto/response/dreamListResponse";
import { shareDreamWithSortRequest } from "../../../models/dto/request/shareDreamWithSortRequest";
import ListSkeleton from "../../ListSkeleton/ListSkeleton";

const DreamList = (): JSX.Element => {
  const [dreams, setDreams] = useState<DreamType[] | null>(null);
  const [page, setPage] = useState<number>(0);
  const totalPageRef = useRef<number>(1);
  const nnDreams = dreams || [];

  const setDreamList = async () => {
    const param: shareDreamWithSortRequest = {
      page: page,
      size: 10,
      sort: "shared",
    };

    try {
      const { share_dreams, total_page } = (await getShareDream(param)).data.content.response;
      totalPageRef.current = total_page;
      setDreams(nnDreams.concat(share_dreams));
    } catch (error) {
      console.log(error);
    }
  };

  const onMore = () => {
    setPage(page + 1);
  };

  const dreamsRender = nnDreams.map((value) => {
    return <Dream dream={value} />;
  });

  const renderSkeleton = Array(10)
    .fill(0)
    .map((_, index) => {
      return <ListSkeleton key={index} />;
    });

  useEffect(() => {
    setDreamList();
  }, [page]);

  return (
    <>
      {(nnDreams.length > 0 || !dreams) && (
        <div>
          <I.SectionTitle>공개된 꿈 목록</I.SectionTitle>
          <div>{dreams ? dreamsRender : renderSkeleton}</div>
          {totalPageRef && totalPageRef.current !== page + 1 && (
            <S.MoreContaier onClick={onMore}>
              <div>더보기</div>
              <img alt="down" src={DownChevron} />
            </S.MoreContaier>
          )}
        </div>
      )}
    </>
  );
};

export default DreamList;
