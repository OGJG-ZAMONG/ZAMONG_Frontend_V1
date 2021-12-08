import * as S from "./style";
import { useEffect, useState } from "react";
import ListSkeleton from "../../ListSkeleton/ListSkeleton";
import { getSearchSell } from "../../../utils/api/Search";
import { searchDreamRequest } from "../../../models/dto/request/searchDreamRequest";
import DreamSell from "../../Dream/DreamSell/DreamSell";
import { sellSearchList } from "../../../models/dto/response/SellListResponse";

interface Props {
  content: string;
  types: string;
}

const SellDreamList = ({ content, types }: Props): JSX.Element => {
  const [sellDream, setSellDreams] = useState<sellSearchList[] | null>(null);
  const seDreams = sellDream || [];

  const searchShare = async (title: string, types: string) => {
    const par: searchDreamRequest = {
      title: title,
      types: types,
    };
    try {
      const { sell_dreams } = (await getSearchSell(par)).data.content.response;
      setSellDreams(seDreams.concat(sell_dreams));
    } catch (error) {
      throw error;
    }
  };

  const dreamsRender = seDreams.map((data, index) => {
    return <DreamSell dream={data} key={index} />;
  });

  const renderSkeleton = Array(5)
    .fill(0)
    .map((_, index) => {
      return <ListSkeleton key={index} />;
    });

  useEffect(() => {
    searchShare(content, types);
  }, [content, types]);

  return (
    <>
      {(seDreams.length > 0 || !sellDream) && (
        <div>
          <S.HeadText>
            해몽 요청된 꿈 <span>{seDreams?.length}개</span>
          </S.HeadText>
          {seDreams?.length === 0 ? (
            <S.DreamText>해몽 요청된 꿈이 없습니다.</S.DreamText>
          ) : (
            <div>{seDreams ? dreamsRender : renderSkeleton}</div>
          )}
        </div>
      )}
    </>
  );
};

export default SellDreamList;
