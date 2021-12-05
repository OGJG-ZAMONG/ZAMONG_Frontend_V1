import * as S from "./style";
import React, { FC, useEffect, useState } from "react";
import {
  getSellMyOnSaleManagement,
  getSellSoldOutManagement,
} from "../../../utils/api/Sell/Management";
import PageNation from "../../PageNation/PageNation";
import CardSkeleton from "../../CardSkeleton/CardSkeleton";
import MySellDreamCard from "../../CardDream/MySellDreamCard/MySellDreamCard";

const SellManagement: FC = (): JSX.Element => {
  const [myOnSaleData, setMyOnSaleData] = useState<Array<object> | null>(null);
  const [mySoldOutData, setMySoldOutData] = useState<Array<object> | null>(null);
  const [page, setMaxPage] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(0);

  useEffect(() => {
    myOnSaleManagement();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pageIndex]);

  const renderSkeleton = Array<number>(8)
    .fill(0)
    .map((_, index) => {
      return <CardSkeleton key={index} />;
    });

  const myOnSaleManagement = async () => {
    try {
      const response = await getSellMyOnSaleManagement(pageIndex);
      setMyOnSaleData(response.data.content.response.sell_dreams);
      console.log(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  const mySoldOutManagement = async () => {
    setMyOnSaleData(null);
    try {
      const response = await getSellSoldOutManagement(pageIndex);
      setMySoldOutData(response.data.content.response.sell_dreams);
      console.log(response.data.content);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    myOnSaleManagement();
    mySoldOutManagement();
  }, []);

  const renderOnSaleDream = myOnSaleData?.map((value: any, index) => {
    return <MySellDreamCard key={index} data={value} />;
  });

  const renderSoldOutDream = mySoldOutData?.map((value: any, index) => {
    return <MySellDreamCard key={index} data={value} />;
  });

  return (
    <S.Contents>
      <S.SellManagementText>꿈 판매 관리</S.SellManagementText>
      <S.Box>
        <S.SubTitle>나의 판매중인 꿈 목록</S.SubTitle>
        <S.List>{myOnSaleData ? renderOnSaleDream : renderSkeleton}</S.List>
        {pageIndex >= 1 ? (
          <PageNation max={page} indexState={[pageIndex, setPageIndex]} columnCount={10} />
        ) : null}
      </S.Box>
      <S.Box>
        <S.SubTitle>나의 판매한 꿈 목록</S.SubTitle>
        <S.List>
          {mySoldOutData === null ? (
            <S.Text>공유된 꿈이 없습니다.</S.Text>
          ) : mySoldOutData ? (
            renderSoldOutDream
          ) : (
            renderSkeleton
          )}
        </S.List>
        {pageIndex >= 1 ? (
          <PageNation max={page} indexState={[pageIndex, setPageIndex]} columnCount={10} />
        ) : null}
      </S.Box>
    </S.Contents>
  );
};

export default SellManagement;
