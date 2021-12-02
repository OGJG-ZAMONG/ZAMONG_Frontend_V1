import * as S from "./styles";
import React, { FC, useState, useEffect } from "react";
import SellingDream from "../../CardDream/SellingDream/SellingDream";
import { getCurrentSellingDreams } from "../../../utils/api/Sell/Main";
import PageNation from "../../PageNation/PageNation";

const SellMain: FC = (): JSX.Element => {
  const [totalPage, setMaxPage] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [dreamData, setDreamData] = useState<Array<object>>([]);

  const settingDreams = async () => {
    try {
      const response = await getCurrentSellingDreams(pageIndex);

      setDreamData(response.data.content.response.sell_dreams);
      setMaxPage(response.data.content.response.total_page);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    settingDreams();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pageIndex]);

  return (
    <S.Container>
      <S.Information>
        <S.SellDreamText>꿈 판매</S.SellDreamText>
        <S.LinkBox to="/sell/management">
          <S.SellManagementText>판매 관리 </S.SellManagementText>
        </S.LinkBox>
      </S.Information>
      <S.SellingDreamListText>판매중인 꿈 목록</S.SellingDreamListText>
      <S.SellingDreamListContainer>
        {dreamData.map((value: any) => {
          const { uuid, user, cost, updated_at, title, dream_types, default_posting_image } = value;
          return (
            <SellingDream
              uuid={uuid}
              user={user}
              price={cost}
              date={updated_at}
              title={title}
              tag={dream_types}
              img={default_posting_image}
            />
          );
        })}
      </S.SellingDreamListContainer>
      <PageNation max={totalPage} indexState={[pageIndex, setPageIndex]} columnCount={10} />
    </S.Container>
  );
};

export default SellMain;
