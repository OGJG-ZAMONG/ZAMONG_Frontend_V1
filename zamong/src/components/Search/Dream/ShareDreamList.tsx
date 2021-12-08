import * as S from "./style";
import Dream from "../../Dream/Dream";
import { useEffect, useState } from "react";
import ListSkeleton from "../../ListSkeleton/ListSkeleton";
import { getSearchDream } from "../../../utils/api/Search";
import { searchDreamRequest } from "../../../models/dto/request/searchDreamRequest";
import { DreamList } from "../../../models/dto/response/dreamListResponse";

interface Props {
  content: string;
  types: string;
}

const ShareDreamList = ({ content, types }: Props): JSX.Element => {
  const [shareDream, setShareDreams] = useState<DreamList[] | null>(null);
  const shDreams = shareDream || [];

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
  }, [content, types]);

  return (
    <>
      \
      <div>
        <S.HeadText>
          공유된 꿈 <span>{shareDream?.length}개</span>
        </S.HeadText>
        {shareDream?.length === 0 ? (
          <S.DreamText>공유된 꿈이 없습니다.</S.DreamText>
        ) : (
          <div>{shareDream ? dreamsRender : renderSkeleton}</div>
        )}
      </div>
    </>
  );
};

export default ShareDreamList;
