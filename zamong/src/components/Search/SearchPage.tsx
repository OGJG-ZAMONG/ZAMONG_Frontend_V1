import React, { useEffect, useState } from "react";
import * as S from "./style";
import Dream from "./Dream/Dream";
import { DownChevron } from "../../assets";
import {
  getSearchDream,
  getSearchId,
  getSearchInterpretation,
  getSearchSell,
} from "../../utils/api/Search";

interface usersType {
  uuid: string;
  id: string;
  profile: string;
  is_following: boolean;
  follow_datetime: string;
}
interface shareType {
  uuid: string;
  default_posting_image: string;
  title: string;
  lucy_count: number;
  dream_types: string[];
  share_datetime: string;
  user: User;
}
interface sellType {
  uuid: string;
  default_posting_image: string;
  title: string;
  cost: number;
  dream_types: string[];
  updated_at: string;
  user: User;
}
interface User {
  uuid: string;
  id: string;
  profile: string;
}

interface interpretationType {
  uuid: string;
  default_posting_image: string;
  title: string;

  dream_types: string[];
  updated_at: string;
  user: User;
}

interface PropsType {
  content: string;
  types: string;
}

const SearchPage = ({ content, types }: PropsType): JSX.Element => {
  const [userResult, setUser] = useState<usersType[] | null>(null);
  const [shareResult, setShare] = useState<shareType[] | null>(null);
  const [sellResult, setSell] = useState<sellType[] | null>(null);
  const [interpretationResult, setInterpretation] = useState<
    interpretationType[] | null
  >(null);

  const searchUser = async (id: string) => {
    try {
      const response = await getSearchId(id);
      setUser(response.data.content.response.users);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const searchShare = async (title: string, types: string) => {
    try {
      const response = await getSearchDream(title, types);
      setShare(response.data.content.response.share_dreams);
    } catch (error) {
      throw error;
    }
  };

  const searchSell = async (title: string, types: string) => {
    try {
      const response = await getSearchSell(title, types);
      setSell(response.data.content.response.sell_dreams);
    } catch (error) {
      throw error;
    }
  };

  const searchInterpretation = async (title: string, types: string) => {
    try {
      const response = await getSearchInterpretation(title, types);
      setInterpretation(response.data.content.response.interpretation_dreams);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    searchUser(content);
    searchShare(content, types);
    searchSell(content, types);
    searchInterpretation(content, types);
  }, [content, types]);

  return (
    <S.SearchContent>
      <S.ContentBox>
        <S.ResultText>'{content}'(으)로 검색한 결과</S.ResultText>
        <S.DreamBox>
          <S.HeadText>공유된 꿈 {shareResult?.length}개</S.HeadText>
          {shareResult &&
            shareResult.map((data, v) => {
              const date =
                data.share_datetime.substring(5, 7) +
                "월 " +
                data.share_datetime.substring(8, 10) +
                "일";

              return (
                <Dream
                  default_posting_image={data.default_posting_image}
                  title={data.title}
                  lucy_count={data.lucy_count}
                  date={date}
                  dream_types={data.dream_types}
                  user={data.user}
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
          <S.HeadText>해몽 요청 {interpretationResult?.length}개</S.HeadText>
          {interpretationResult &&
            interpretationResult.map((data, v) => {
              const date =
                data.updated_at.substring(5, 7) +
                "월 " +
                data.updated_at.substring(8, 10) +
                "일";
              return (
                <Dream
                  default_posting_image={data.default_posting_image}
                  title={data.title}
                  lucy_count={100}
                  date={date}
                  dream_types={data.dream_types}
                  user={data.user}
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
          <S.HeadText>판매 꿈 {sellResult?.length}개</S.HeadText>
          {sellResult &&
            sellResult.map((data, v) => {
              const date =
                data.updated_at.substring(5, 7) +
                "월 " +
                data.updated_at.substring(8, 10) +
                "일";
              return (
                <Dream
                  default_posting_image={data.default_posting_image}
                  title={data.title}
                  lucy_count={data.cost}
                  date={date}
                  dream_types={data.dream_types}
                  user={data.user}
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
          {userResult?.length === 0 ? null : (
            <S.HeadText>검색된 유저 {userResult?.length}명</S.HeadText>
          )}
          {userResult &&
            userResult.map((data, v) => {
              // const date =
              //   data.follow_datetime.substring(5, 7) +
              //   "월" +
              //   " " +
              //   (data.follow_datetime.substring(8, 10) + "일");

              return (
                <>
                  <S.User>
                    <S.LeftBox>
                      <S.Profile img={data.profile} />
                      <S.UserNickName>{data.id}</S.UserNickName>
                    </S.LeftBox>
                    <S.RightBox>
                      {data.follow_datetime === null ? null : (
                        <S.FollowDate>
                          팔로우를 시작한 날짜 : {data.follow_datetime}
                        </S.FollowDate>
                      )}

                      {data.is_following ? (
                        <S.FollowingBtn
                        // onClick={() => unFollowClick(data.uuid)}
                        >
                          팔로우중
                        </S.FollowingBtn>
                      ) : (
                        <S.FollowBtn
                        //onClick={() => followClick(data.uuid)}
                        >
                          팔로우
                        </S.FollowBtn>
                      )}
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
