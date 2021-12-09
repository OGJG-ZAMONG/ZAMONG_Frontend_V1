import React, { FC, useEffect, useRef, useState } from "react";
import { getFollower } from "../../../utils/api/Profile";
import * as S from "./style";
import FollowerUser from "../../User/FollowerUser/FollowerUser";
import { follower } from "../../../models/dto/response/profileResponse";
import UserSkeleton from "../../UserSkeleton/UserSkeleton";
import { DownChevron } from "../../../assets";
import { pageRequest } from "../../../models/dto/request/followListRequest";

interface IdType {
  id: string;
}

const FollowerContent: FC<IdType> = ({ id }) => {
  const [followerState, setFollower] = useState<follower[] | null>(null);
  const [page, setPage] = useState<number>(0);
  const totalPageRef = useRef<number>(1);
  const [count, setCount] = useState<number>(0);
  const nnState = followerState || [];

  useEffect(() => {
    setFollowerList();
  }, [id, page]);

  const setFollowerList = async () => {
    const parameter: pageRequest = {
      page: page,
      size: 6,
    };
    try {
      const { followers, total_page, total_size } = (
        await getFollower(id, parameter)
      ).data.content.response;
      totalPageRef.current = total_page;
      setFollower(nnState.concat(followers));
      setCount(total_size);
    } catch (error) {
      throw error;
    }
  };

  const renderFollowers =
    followerState?.length === 0 ? (
      <S.Text>팔로워가 없습니다.</S.Text>
    ) : (
      nnState.map((data, v) => {
        return <FollowerUser data={data} key={v} refresh={setFollowerList} />;
      })
    );

  const renderSkeleton = [1, 2, 3, 4, 5].map((_, index) => {
    return <UserSkeleton key={index} />;
  });

  const onMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <S.Content>
        <S.Follower>
          팔로워 <span>{count}명</span>
        </S.Follower>
        <S.FollowerList>
          {followerState ? renderFollowers : renderSkeleton}
          {followerState?.length === 0
            ? null
            : totalPageRef &&
              totalPageRef.current !== page + 1 && (
                <S.MoreContaier onClick={onMore}>
                  <div>더보기</div>
                  <img alt="down" src={DownChevron} />
                </S.MoreContaier>
              )}
        </S.FollowerList>
      </S.Content>
    </>
  );
};

export default FollowerContent;
