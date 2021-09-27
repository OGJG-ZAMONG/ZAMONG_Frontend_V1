import * as S from "./style";
import React, {
  FC,
  useState,
  useEffect
} from "react";
import FollowDreamDiary from "../../CardDream/FollowDreamDiary/FollowDreamDiary";

const SellMain: FC = (): JSX.Element => {
  const MaxPage = 27;
  const pageLength: number[] = [];
  const finalPageLength: number[][] = [];
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageDepth, setPageDepth] = useState<number>(0);

  for (let i = 0; i < MaxPage; i++) {
    pageLength.push(i + 1);
  }
  for (let i = 0; i < MaxPage; i += 10) {
    finalPageLength.push(pageLength.slice(i, i + 10));
  }

  const nextPage = () => {
    if (pageIndex >= MaxPage - 1) {
      return;
    } else {
      setPageIndex(pageIndex + 1);
    }
  };

  const prevPage = () => {
    if (pageIndex < 1) {
      return;
    } else {
      setPageIndex(pageIndex - 1);
    }
  };

  const setPage = (e: React.MouseEvent<HTMLDivElement> | any) => {
    setPageIndex(e.target.innerHTML - 1);
  };

  return (
    <S.Container>
      <S.Information>
        <S.SellDreamText>꿈 판매</S.SellDreamText>
        <S.SellManagementText>꿈 판매 관리 {">"}</S.SellManagementText>
      </S.Information>
      <S.SellingDreamListText>판매중인 꿈 목록</S.SellingDreamListText>
      <S.SellingDreamListContainer>
        <FollowDreamDiary />
      </S.SellingDreamListContainer>
      <S.PageNationContainer>
        <S.Prev onClick={prevPage}>{"<"} 이전</S.Prev>
        <S.PageContainer onClick={setPage}>
          {finalPageLength[pageDepth].map((value: number, index: number) => {
            if (pageIndex >= Math.max(...finalPageLength[pageDepth])) {
              setPageDepth(pageDepth + 1);
            } else if (
              pageIndex + 1 < Math.min(...finalPageLength[pageDepth]) &&
              pageDepth != 0
            ) {
              setPageDepth(pageDepth - 1);
            }

            return (
              <S.Page
                key={index}
                style={
                  index + pageDepth * 10 === pageIndex
                    ? { color: "#0A84FF" }
                    : { color: "#FFFFFF" }
                }
              >
                {value}
              </S.Page>
            );
          })}
        </S.PageContainer>

        <S.Next onClick={nextPage}>다음 {">"}</S.Next>
      </S.PageNationContainer>
    </S.Container>
  );
};

export default SellMain;
