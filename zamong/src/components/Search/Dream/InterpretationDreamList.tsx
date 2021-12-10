import * as S from "./style";
import { useEffect, useState, useRef } from "react";
import ListSkeleton from "../../ListSkeleton/ListSkeleton";
import { getSearchInterpretation } from "../../../utils/api/Search";
import { searchDreamRequest } from "../../../models/dto/request/searchDreamRequest";
import DreamInterpretation from "../../Dream/DreamInterpretation/DreamInterpretation";
import { InterpretationDream } from "../../../models/dto/response/InterpretationListResponse";

interface Props {
  content: string;
  types: string;
}

const InterpretationDreamList = ({ content, types }: Props): JSX.Element => {
  const [interDream, setInterDreams] = useState<InterpretationDream[] | null>(
    null
  );
  const inDreams = interDream || [];

  const searchShare = async (title: string, types: string) => {
    const par: searchDreamRequest = {
      title: title,
      types: types,
    };
    try {
      const { interpretation_dreams } = (await getSearchInterpretation(par))
        .data.content.response;
      setInterDreams(inDreams.concat(interpretation_dreams));
    } catch (error) {
      throw error;
    }
  };

  const dreamsRender = inDreams.map((data, index) => {
    return <DreamInterpretation data={data} key={index} />;
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
      <div>
        <S.HeadText>
          해몽 요청된 꿈 <span>{inDreams?.length}개</span>
        </S.HeadText>
        {inDreams?.length === 0 ? (
          <S.DreamText>해몽 요청된 꿈이 없습니다.</S.DreamText>
        ) : (
          <div>{inDreams ? dreamsRender : renderSkeleton}</div>
        )}
      </div>
    </>
  );
};

export default InterpretationDreamList;
