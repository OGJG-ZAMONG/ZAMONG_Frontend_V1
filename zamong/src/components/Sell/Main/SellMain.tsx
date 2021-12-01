import * as S from "./styles";
import React, { FC, useState, useEffect } from "react";
import SellingDream from "../../CardDream/SellingDream/SellingDream";
import { getCurrentSellingDreams } from "../../../utils/api/Sell/Main";

const SellMain: FC = (): JSX.Element => {
  const [totalPage, setMaxPage] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageDepth, setPageDepth] = useState<number>(0);
  const [dreamData, setDreamData] = useState<Array<object>>([]);
  const [renderList, setRenderList] = useState<number[][]>([[]]);

  useEffect(() => {
    getCurrentSellingDreams(pageIndex)
      .then((res) => {
        setDreamData(res.data.content.response.sell_dreams);
      })
      .catch((error) => {
        console.log(error);
      });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pageIndex]);

  useEffect(() => {
    getCurrentSellingDreams(pageIndex).then((res) => {
      setMaxPage(res.data.content.response.total_page);
      getPageList(res.data.content.response.total_page, 10);
    });
  }, []);

  const nextPage = () => {
    if (pageIndex >= totalPage - 1) {
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

  const getPageList = (totalPage: number, pageColumn: number) => {
    const ArrayTwo: number[][] = [];

    for (let i = 0; i < Math.ceil(totalPage / pageColumn); i++) {
      const ArrayOne: number[] = [];

      for (let j = 1; j < pageColumn; j++) {
        if (i * pageColumn + j > totalPage) {
          continue;
        }
        ArrayOne.push(i * pageColumn + j);
      }
      ArrayTwo.push(ArrayOne);
    }

    setRenderList(ArrayTwo);
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
            } else if (pageIndex + 1 < Math.min(...renderList[pageDepth]) && pageDepth != 0) {
              setPageDepth(pageDepth - 1);
            }

            return (
              <S.Page
                key={index}
                style={
                  index + pageDepth * 10 === pageIndex ? { color: "#0A84FF" } : { color: "#8E8E93" }
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
