import React, { useEffect, useState } from "react";
import * as S from "./style";
import Dream from "./Dream/Dream";
import { DownChevron } from "../../assets";

const SearchPage = (): JSX.Element => {
  const dreamLength: number[] = [];
  for (let i = 0; i < 5; i++) {
    dreamLength.push(i + 1);
  }
  const userLength: number[] = [];
  const MaxUser = 3;
  for (let i = 0; i < MaxUser; i++) {
    userLength.push(i);
  }

  return (
    <S.SearchContent>
      <S.ContentBox>
        <S.ResultText>'꿈'(으)로 검색한 결과</S.ResultText>
        <S.DreamBox>
          <S.HeadText>공유된 꿈 10개</S.HeadText>
          {dreamLength.map((v) => {
            return (
              <Dream
                default_posting_image={
                  "https://ogjg-zamong.s3.ap-northeast-1.amazonaws.com/default-posting-image/Rectangle+1.png"
                }
                title={"꿈을."}
                lucy_count={100}
                date={"10월 21일"}
                key={v}
              />
            );
          })}
          <S.More>
            <div>더보기</div>
            <img alt="down" src={DownChevron} />
          </S.More>
        </S.DreamBox>
        <S.DreamBox>
          <S.HeadText>해몽 요청 10개</S.HeadText>
          {dreamLength.map((v) => {
            return (
              <Dream
                default_posting_image={
                  "https://ogjg-zamong.s3.ap-northeast-1.amazonaws.com/default-posting-image/Rectangle+1.png"
                }
                title={"꿈을."}
                lucy_count={100}
                date={"10월 21일"}
                key={v}
              />
            );
          })}
          <S.More>
            <div>더보기</div>
            <img alt="down" src={DownChevron} />
          </S.More>
        </S.DreamBox>
        <S.DreamBox>
          <S.HeadText>판매 꿈 10개</S.HeadText>
          {dreamLength.map((v) => {
            return (
              <Dream
                default_posting_image={
                  "https://ogjg-zamong.s3.ap-northeast-1.amazonaws.com/default-posting-image/Rectangle+1.png"
                }
                title={"꿈을."}
                lucy_count={100}
                date={"10월 21일"}
                key={v}
              />
            );
          })}
          <S.More>
            <div>더보기</div>
            <img alt="down" src={DownChevron} />
          </S.More>
        </S.DreamBox>
        <S.UserBox>
          <S.HeadText>검색된 유저 3명</S.HeadText>
          {userLength.map((v) => {
            return (
              <>
                <S.User>
                  <S.LeftBox>
                    <S.Profile></S.Profile>
                    <S.UserNickName>dsmwhitie</S.UserNickName>
                  </S.LeftBox>
                  <S.RightBox>
                    <S.FollowDate>
                      팔로우를 시작한 날짜 : 10월 18일
                    </S.FollowDate>
                    <S.FollowBtn>팔로우중</S.FollowBtn>
                  </S.RightBox>
                </S.User>
              </>
            );
          })}
        </S.UserBox>
      </S.ContentBox>
    </S.SearchContent>
  );
};

export default SearchPage;
