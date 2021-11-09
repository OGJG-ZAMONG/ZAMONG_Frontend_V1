import * as S from "./styles";
import More from "../../../assets/icons/more.svg";
import DefaultImage from "../../../assets/DefaultPostingImages/1.jpg";
import { useLayoutEffect, useState } from "react";
import { following } from "../../../models/dto/response/followingsResponse";
import { getFollowList } from "../../../utils/api/Main";

const FollowList = (): JSX.Element => {
  const [followings, setFollowings] = useState<following[]>([]);

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

  const followersRender = followings.slice(0, 8).map((value) => {
    return <S.Follow img={value.profile} to="/" />;
  });

  useLayoutEffect(() => {
    setFollowList();
  }, []);

  return (
    <>
      {followings.length > 0 && (
        <S.Container>
          <S.SectionTitle>
            <span>팔로잉</span>
          </S.SectionTitle>
          <S.FollowContainer>
            {followersRender}
            <S.MoreIcon alt="more" src={More} />
          </S.FollowContainer>
        </S.Container>
      )}
    </>
  );
};

export default FollowList;
