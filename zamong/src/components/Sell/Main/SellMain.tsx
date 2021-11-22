import * as S from "./styles";
import React, { FC, useState, useEffect } from "react";
import SellingDream from "../SellingDream/SellingDream";
import { getCurrentSellingDreams } from "../../../utils/api/Sell/Main";

const SellMain: FC = (): JSX.Element => {
  const [maxPage, setMaxPage] = useState<number>(0);
  const [maxSize, setMaxSize] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageDepth, setPageDepth] = useState<number>(0);
  const [dreamData, setDreamData] = useState<Array<object>>([]);
  const [renderList, setRenderList] = useState<number[][]>([[]]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    getCurrentSellingDreams(pageIndex)
      .then((res) => {
        setDreamData(res.data.content.response.sell_dreams);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageIndex]);

  useEffect(() => {
    getCurrentSellingDreams(pageIndex).then((res) => {
      setMaxPage(res.data.content.response.total_page);
      setMaxSize(res.data.content.response.total_size);
      getPageList(res.data.content.response.total_page, 10);
    });
  }, []);

  const nextPage = () => {
    if (pageIndex >= maxPage - 1) {
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
    if (Number(e.target.innerHTML)) {
      setPageIndex(e.target.innerHTML - 1);
    }
  };

  const getPageList = (pageCount: number, pageColumn: number) => {
    const list: number[][] = [];

    for (let i = 0; i < Math.ceil(pageCount / pageColumn); i++) {
      const l: number[] = [];

      for (let j = 1; j < pageColumn; j++) {
        if (i * pageColumn + j > pageCount) {
          continue;
        }
        l.push(i * pageColumn + j);
      }
      list.push(l);
    }

    setRenderList(list);
  };

  return (
    <S.Container>
      <S.Information>
        <S.SellDreamText>꿈 판매</S.SellDreamText>
        <S.LinkBox to={"/sell/management"}>
          <S.SellManagementText>판매 관리 {">"}</S.SellManagementText>
        </S.LinkBox>
      </S.Information>
      <S.SellingDreamListText>판매중인 꿈 목록</S.SellingDreamListText>
      <S.SellingDreamListContainer>
        {dreamData.map((value: any) => {
          return (
            <SellingDream
              key={value.uuid}
              user={value.user}
              price={value.cost}
              date={value.updated_at}
              title={value.title}
              tag={value.dream_types}
              img={value.default_posting_image}
            />
          );
        })}
      </S.SellingDreamListContainer>
      <S.PageNationContainer>
        <S.Prev onClick={prevPage}>{"<"} 이전</S.Prev>
        <S.PageContainer onClick={setPage}>
          {renderList[pageDepth].map((value: number, index: number) => {
            if (pageIndex >= Math.max(...renderList[pageDepth])) {
              setPageDepth(pageDepth + 1);
            } else if (
              pageIndex + 1 < Math.min(...renderList[pageDepth]) &&
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
                    : { color: "#8E8E93" }
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
