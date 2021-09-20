import * as S from "./style";
import { FC } from 'react';
import FollowDreamDiary from "../../CardDream/FollowDreamDiary/FollowDreamDiary";

const SellMain:FC = ():JSX.Element => {
    const pageLength = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
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
                <S.Prev>{"<"} 이전</S.Prev>
                {
                    pageLength.map((v, i) => {
                        return <S.Page key={i}>{v}</S.Page>
                    })
                }
                <S.Next>다음 {">"}</S.Next>
            </S.PageNationContainer>
        </S.Container>
    )
}

export default SellMain;