import * as S from "./style";
import Dream from "../../Dream/Dream";
import { DownChevron } from "../../../assets";
import { useEffect, useState, useRef } from "react";
import { DreamList } from "../../../models/dto/response/dreamListResponse";
import { shareDreamWithSortRequest } from "../../../models/dto/request/shareDreamWithSortRequest";
import ListSkeleton from "../../ListSkeleton/ListSkeleton";
import { getSearchDream } from "../../../utils/api/Search";
import { searchDreamRequest } from "../../../models/dto/request/searchDreamRequest";

interface Props {
  content: string;
  types: string;
}

const ShareDreamList = ({ content, types }: Props): JSX.Element => {
  const [shareDream, setShareDreams] = useState<DreamList[] | null>(null);
  const shDreams = shareDream || [];
  const [page, setPage] = useState<number>(0);
  const totalPageRef = useRef<number>(1);

  const searchShare = async (title: string, types: string) => {
    const par: searchDreamRequest = {
      title: title,
      types: types,
    };
    try {
      const { share_dreams } = (await getSearchDream(par)).data.content
        .response;
      setShareDreams(shDreams.concat(share_dreams));
    } catch (error) {
      throw error;
    }
  };

  const onMore = () => {
    setPage(page + 1);
  };

  const dreamsRender = shDreams.map((value, index) => {
    return <Dream dream={value} key={index} />;
  });

  const renderSkeleton = Array(5)
    .fill(0)
    .map((_, index) => {
      return <ListSkeleton key={index} />;
    });

  useEffect(() => {
    searchShare(content, types);
  }, [page, content, types]);

  return (
    <>
      {(shDreams.length > 0 || !shareDream) && (
        <div>
          <S.HeadText>
            공유된 꿈 <span>{shareDream?.length}개</span>
          </S.HeadText>
          {shareDream?.length === 0 ? (
            <S.DreamText>공유된 꿈이 없습니다.</S.DreamText>
          ) : (
            <div>{shareDream ? dreamsRender : renderSkeleton}</div>
          )}
          {totalPageRef && totalPageRef.current !== page + 1 && (
            <S.More onClick={onMore}>
              <div>더보기</div>
              <img alt="down" src={DownChevron} />
            </S.More>
          )}
        </div>
      )}
    </>
  );
};

export default ShareDreamList;
