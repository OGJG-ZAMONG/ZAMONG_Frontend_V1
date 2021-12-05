import * as S from "./style";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  getSellMyOnSaleManagement,
  getSellSoldOutManagement,
} from "../../../utils/api/Sell/Management";
import PageNation from "../../PageNation/PageNation";
import CardSkeleton from "../../CardSkeleton/CardSkeleton";
import MySellDreamCard from "../../CardDream/MySellDreamCard/MySellDreamCard";
import { SellDream } from "../../../models/dto/response/sellManagementResponse";

const SellManagement: FC = (): JSX.Element => {
  const [myOnSaleData, setMyOnSaleData] = useState<SellDream[] | null>(null);
  const [mySoldOutData, setMySoldOutData] = useState<SellDream[] | null>(null);
  const [salePage, setSalePage] = useState<number>(0);
  const [soldOutPage, setSoldOutPage] = useState<number>(0);
  const [saleMax, setSaleMax] = useState<number>(0);
  const [soldOutMax, setSoldOutMax] = useState<number>(0);
  const saleContainerRef = useRef<HTMLDivElement>(null);
  const soldContainerRef = useRef<HTMLDivElement>(null);
  const nnSale = myOnSaleData || [];
  const nnSold = mySoldOutData || [];

  useEffect(() => {
    myOnSaleManagement();
    if (saleContainerRef.current) {
      window.scrollTo({
        top: saleContainerRef.current.clientTop - 64,
        behavior: "smooth",
      });
    }
  }, [salePage]);

  useEffect(() => {
    mySoldOutManagement();
    if (soldContainerRef.current) {
      window.scrollTo({
        top: soldContainerRef.current.clientTop - 64,
        behavior: "smooth",
      });
    }
  }, [soldOutPage]);

  const renderSkeleton = Array<number>(8)
    .fill(0)
    .map((_, index) => {
      return <CardSkeleton key={index} />;
    });

  const myOnSaleManagement = async () => {
    try {
      const response = await getSellMyOnSaleManagement(salePage);
      const { total_page, sell_dreams } = response.data.content.response;
      setSaleMax(total_page);
      setMyOnSaleData(sell_dreams);
    } catch (error) {
      throw error;
    }
  };

  const mySoldOutManagement = async () => {
    setMyOnSaleData(null);
    try {
      const response = await getSellSoldOutManagement(soldOutPage);
      const { total_page, sell_dreams } = response.data.content.response;
      setSoldOutMax(total_page);
      setMySoldOutData(sell_dreams);
    } catch (error) {
      throw error;
    }
  };

  const renderOnSaleDream =
    nnSale.length > 0 ? (
      nnSale.map((value, index) => {
        return <MySellDreamCard key={index} data={value} />;
      })
    ) : (
      <S.None>판매중인 꿈이 없습니다.</S.None>
    );
  const renderSoldOutDream =
    nnSold.length > 0 ? (
      nnSold.map((value, index) => {
        return <MySellDreamCard key={index} data={value} />;
      })
    ) : (
      <S.None>판매 완료한 꿈이 없습니다.</S.None>
    );

  return (
    <S.Contents>
      <S.SellManagementText ref={saleContainerRef}>꿈 판매 관리</S.SellManagementText>
      <S.Box>
        <S.SubtitleContainer>
          <S.SubTitle>나의 판매중인 꿈 목록</S.SubTitle>
          <S.Write to="/sell/write">판매 글 쓰기 </S.Write>
        </S.SubtitleContainer>
        <S.List>{myOnSaleData ? renderOnSaleDream : renderSkeleton}</S.List>
        {myOnSaleData && myOnSaleData.length > 0 && (
          <PageNation max={saleMax} indexState={[salePage, setSalePage]} columnCount={10} />
        )}
      </S.Box>
      <S.Box>
        <S.SubTitle ref={soldContainerRef}>나의 판매한 꿈 목록</S.SubTitle>
        <S.List>
          {mySoldOutData === null ? (
            <S.Text>공유된 꿈이 없습니다.</S.Text>
          ) : mySoldOutData ? (
            renderSoldOutDream
          ) : (
            renderSkeleton
          )}
        </S.List>
        {mySoldOutData && mySoldOutData.length > 0 && (
          <PageNation
            max={soldOutMax}
            indexState={[soldOutPage, setSoldOutPage]}
            columnCount={10}
          />
        )}
      </S.Box>
    </S.Contents>
  );
};

export default SellManagement;
