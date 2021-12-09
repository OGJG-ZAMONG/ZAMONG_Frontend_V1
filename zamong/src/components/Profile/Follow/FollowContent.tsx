import React, { FC, useEffect, useRef, useState } from "react";
import { getFollowing } from "../../../utils/api/Profile";
import * as S from "./style";
import { following } from "../../../models/dto/response/followingsResponse";
import FollowUser from "../../User/FollowUser/FollowUser";
import UserSkeleton from "../../UserSkeleton/UserSkeleton";
import { pageRequest } from "../../../models/dto/request/followListRequest";
import { DownChevron } from "../../../assets";

interface IdType {
  id: string;
}

const FollowContent: FC<IdType> = ({ id }) => {
  const [followState, setFollow] = useState<following[] | null>(null);
  const nnState = followState || [];
  const [page, setPage] = useState<number>(0);
  const totalPageRef = useRef<number>(1);
  const [count, setCount] = useState<number>(0);

  const setFollowingList = async () => {
    const parameter: pageRequest = {
      page: page,
      size: 6,
    };
    try {
      const { followings, total_page, total_size } = (
        await getFollowing(id, parameter)
      ).data.content.response;
      totalPageRef.current = total_page;
      setCount(total_size);
      setFollow(nnState.concat(followings));
    } catch (error) {
      throw error;
    }
  };

  const onMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setFollowingList();
  }, [id, page]);

  const renderFollowings =
    followState?.length === 0 ? (
      <S.Text>팔로우가 없습니다.</S.Text>
    ) : (
      nnState.map((data, v) => {
        return <FollowUser data={data} key={v} refresh={setFollowingList} />;
      })
    );

  const renderSkeleton = [1, 2, 3, 4, 5].map((_, index) => {
    return <UserSkeleton key={index} />;
  });

  return (
    <S.Content>
      <S.Follower>
        팔로우 <span>{count}명</span>
      </S.Follower>
      <S.FolloweList>
        {followState ? renderFollowings : renderSkeleton}
        {followState?.length === 0
          ? null
          : totalPageRef &&
            totalPageRef.current !== page + 1 && (
              <S.MoreContaier onClick={onMore}>
                <div>더보기</div>
                <img alt="down" src={DownChevron} />
              </S.MoreContaier>
            )}
      </S.FolloweList>
    </S.Content>
  );
};

export default FollowContent;
