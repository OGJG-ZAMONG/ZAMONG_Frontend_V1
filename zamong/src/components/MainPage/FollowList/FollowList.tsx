import * as S from "./styles";
import More from "../../../assets/icons/more.svg";
import DefaultImage from "../../../assets/DefaultPostingImages/1.jpg";
import { useLayoutEffect, useState } from "react";
import { following } from "../../../models/dto/response/followingsResponse";
import { getFollowList } from "../../../utils/api/Main";
import { useHistory } from "react-router";

const FollowList = (): JSX.Element => {
  const [followings, setFollowings] = useState<following[] | null>(null);
  const nnFollowings = followings || []; //null이 아닌 배열
  const { push } = useHistory();

  const setFollowList = async () => {
    const param = {
      page: 0,
      size: 8,
    };
    try {
      const { followings: data } = (await getFollowList(param)).data.content.response;

      setFollowings(data);
    } catch (error) {
      console.log(error);
    }
  };

  const followersRender = nnFollowings.slice(0, 8).map((value) => {
    return <S.Follow img={value.profile} to={`/user/${value.uuid}`} />;
  });

  const renderSkeleton = [1, 2, 3, 4].map((_, index) => {
    return <S.FollowSkeleton key={index} />;
  });

  useLayoutEffect(() => {
    setFollowList();
  }, []);

  const onMoreClick = () => {
    push("/profile?state=2");
  };

  return (
    <>
      {(nnFollowings.length > 0 || !followings) && (
        <S.Container>
          <S.SectionTitle>
            <span>팔로우</span>
          </S.SectionTitle>
          <S.FollowContainer>
            {followings ? followersRender : renderSkeleton}
            <S.MoreIcon alt="more" src={More} onClick={onMoreClick} />
          </S.FollowContainer>
        </S.Container>
      )}
    </>
  );
};

export default FollowList;
