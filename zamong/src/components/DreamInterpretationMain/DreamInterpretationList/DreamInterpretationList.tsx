import DreamInterpretation from "../../Dream/DreamInterpretation/DreamInterpretation";
import * as S from "./styles";
import DownChevron from "../../../assets/icons/downChevron.svg";
import { useLayoutEffect, useRef, useState } from "react";
import { InterpretationDream } from "../../../models/dto/response/InterpretationListResponse";
import { getDreamInterpretationList } from "../../../utils/api/DreamInterpretationMain";
import ListSkeleton from "../../ListSkeleton/ListSkeleton";

const DreamInterpretationList = (): JSX.Element => {
  const [interpretations, setInterpretations] = useState<InterpretationDream[] | null>(null);
  const [page, setPage] = useState<number>(0);
  const totalPageRef = useRef<number>(1);
  const nnInterpretations = interpretations || [];

  const settingInterpretations = async () => {
    try {
      const response = await getDreamInterpretationList(page, 10);
      setInterpretations(
        nnInterpretations.concat(response.data.content.response.interpretation_dreams)
      );
      totalPageRef.current = response.data.content.response.total_page;
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    settingInterpretations();
  }, [page]);

  const onMore = () => {
    setPage(page + 1);
  };

  const renderList = nnInterpretations.map((value, index) => {
    return <DreamInterpretation data={value} key={index} />;
  });

  const renderSkeleton = Array(10)
    .fill(0)
    .map((_, index) => {
      return <ListSkeleton key={index} />;
    });

  return (
    <>
      {(nnInterpretations.length > 0 || !interpretations) && (
        <S.ContentInner>
          <S.TitleContainer>
            <S.Subtitle>해몽 요청</S.Subtitle>
            <S.Write to="/interpretation/write">해몽 요청 글 쓰기 </S.Write>
          </S.TitleContainer>
          <div>
            {interpretations ? renderList : renderSkeleton}
            {totalPageRef && totalPageRef.current !== page + 1 && (
              <S.MoreContaier onClick={onMore}>
                <div>더보기</div>
                <img alt="down" src={DownChevron} />
              </S.MoreContaier>
            )}
          </div>
        </S.ContentInner>
      )}
    </>
  );
};

export default DreamInterpretationList;
