import * as S from "./style";
import React, { FC, useEffect, useState } from "react";
import DreamContent from "./DreamContent/DreamContent";
import {
  getSellMyOnSaleManagement,
  getSellSoldOutManagement,
} from "../../../utils/api/Sell/Management";
interface SellDreams {
  uuid: string;
  default_posting_image: string;
  title: string;
  updated_at: string;
  cost: number;
  user: User[];
}
interface SellType {
  sell_dreams: SellDreams[];
}
interface User {
  uuid: string;
  id: string;
  profile: string;
}

interface SoldOutType {
  sell_dreams: SellDreams[];
}

const SellManagement: FC = (): JSX.Element => {
  const [myOnSaleData, setMyOnSaleData] = useState<SellType>({
    sell_dreams: [],
  });
  const [mySoldOutData, setMySoldOutData] = useState<SoldOutType>({
    sell_dreams: [],
  });

  const MaxPage = 8;
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

  const myOnSaleManagement = async () => {
    try {
      const response = await getSellMyOnSaleManagement(4);
      //setMyOnSaleData(response.data.content.response);
      console.log(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  const mySoldOutManagement = async () => {
    try {
      const response = await getSellSoldOutManagement(4);
      //setMySoldOutData(response.data.content.response);
      console.log(response.data.content);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    myOnSaleManagement();
    mySoldOutManagement();
  }, []);

  return (
    <S.Contents>
      <S.SellManagementText>꿈 판매 관리</S.SellManagementText>
      <S.Box>
        <S.SubTitle>나의 판매중인 꿈 목록</S.SubTitle>
        <S.List>
          {/*{myOnSaleData &&
            myOnSaleDat.map((data, v) => {
              console.log(data.cost);
              return (
                <DreamContent
                  key={v}
                  price={data.cost}
                  date={"8월 15일"}
                  tag={["루시드 드림", "악몽", "가위", "길몽"]}
                  title={data.title}
                />
              );
            })}*/}
        </S.List>
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
      </S.Box>
      <S.Box>
        <S.SubTitle>나의 판매한 꿈 목록</S.SubTitle>
        <S.List>
          {pageLength.map((v) => {
            return (
              <DreamContent
                key={v}
                price={1000}
                date={"8월 15일"}
                tag={["루시드 드림", "악몽"]}
                title={"대법관은 대법원장의 제청으로 국회의 동의를 얻어..."}
              />
            );
          })}
        </S.List>
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
      </S.Box>
    </S.Contents>
  );
};

export default SellManagement;
