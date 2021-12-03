import DreamInterpretation from "../../Dream/DreamInterpretation/DreamInterpretation";
import * as S from "./styles";
import DownChevron from "../../../assets/icons/downChevron.svg";
import { useLayoutEffect, useRef, useState } from "react";
import { InterpretationDream } from "../../../models/dto/response/InterpretationListResponse";
import { getDreamInterpretationList } from "../../../utils/api/DreamInterpretationMain";

const DreamInterpretationList = (): JSX.Element => {
  const [interpretations, setInterpretations] = useState<InterpretationDream[]>([]);
  const [page, setPage] = useState<number>(0);
  const totalPageRef = useRef<number>(1);

  const settingInterpretations = async () => {
    try {
      const response = await getDreamInterpretationList(page, 10);
      setInterpretations(
        interpretations.concat(response.data.content.response.interpretation_dreams)
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

  return (
    <S.ContentInner>
      <S.TitleContainer>
        <S.Subtitle>해몽 요청</S.Subtitle>
        <S.Write to="/interpretation/write">해몽 요청 글 쓰기 </S.Write>
      </S.TitleContainer>
      <div>
        {interpretations.map((value, index) => {
          return <DreamInterpretation data={value} key={index} />;
        })}
        {totalPageRef && totalPageRef.current !== page + 1 && (
          <S.MoreContaier onClick={onMore}>
            <div>더보기</div>
            <img alt="down" src={DownChevron} />
          </S.MoreContaier>
        )}
      </div>
    </S.ContentInner>
  );
};

export default DreamInterpretationList;
