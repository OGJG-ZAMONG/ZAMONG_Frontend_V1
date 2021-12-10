import React, { useEffect, useState } from "react";
import * as S from "./style";
import { getSearchId } from "../../utils/api/Search";
import { useHistory } from "react-router-dom";
import {
  follow,
  getFollowing,
  getMyProfile,
  unfollow,
} from "../../utils/api/Profile";
import ShareDreamList from "./Dream/ShareDreamList";
import InterpretationDreamList from "./Dream/InterpretationDreamList";
import SellDreamList from "./Dream/SellDreamList";

interface usersType {
  uuid: string;
  id: string;
  profile: string;
  is_following: boolean;
  follow_datetime: string;
}
interface Following {
  uuid: string;
  profile: string;
  id: string;
  follow_datetime: string;
  is_following: boolean;
}

interface FollowType {
  followings: Following[];
  total_size: number;
}

interface PropsType {
  content: string;
  types: string;
}

interface ProfileType {
  uuid: string;
  name: string;
  email: string;
  id: string;
  profile: string;
  share_dream_count: number;
  lucy_count: number;
}

const SearchPage = ({ content, types }: PropsType): JSX.Element => {
  const history = useHistory();
  const [followState, setFollow] = useState<FollowType>({
    followings: [],
    total_size: 0,
  });
  const [profileState, setProfile] = useState<ProfileType>({
    uuid: "",
    name: "",
    email: "",
    id: "",
    profile: "",
    share_dream_count: 0,
    lucy_count: 0,
  });
  const [userResult, setUser] = useState<usersType[] | null>(null);

  const searchUser = async (id: string) => {
    try {
      const response = await getSearchId(id);
      setUser(response.data.content.response.users);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const myProfile = async () => {
    try {
      const response = await getMyProfile();
      setProfile(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  const following = async () => {
    try {
      const response = await getFollowing(profileState.id);
      setFollow(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  const followClick = async (id: string) => {
    try {
      await follow(id);
      following();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    following();
  }, [profileState.id]);

  useEffect(() => {
    myProfile();
  }, []);

  const unFollowClick = async (id: string) => {
    try {
      const response = await unfollow(id);
      following();
      return response;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    searchUser(content);
    <ShareDreamList content={content} types={types} />;
    <InterpretationDreamList content={content} types={types} />;
    <SellDreamList content={content} types={types} />;
  }, [content, types]);

  return (
    <S.SearchContent>
      <S.ContentBox>
        <S.ResultText>'{content}'(으)로 검색한 결과</S.ResultText>
        <S.DreamBox>
          <ShareDreamList content={content} types={types} />
        </S.DreamBox>
        <S.DreamBox>
          <InterpretationDreamList content={content} types={types} />
        </S.DreamBox>
        <S.DreamBox>
          <SellDreamList content={content} types={types} />
        </S.DreamBox>
        <S.UserBox>
          {userResult?.length === 0 ? null : (
            <S.HeadText>
              검색된 유저 <span>{userResult?.length}명</span>
            </S.HeadText>
          )}
          {userResult &&
            userResult.map((data, v) => {
              const userProfile = (uuid: string) => {
                history.push(`/user/${uuid}`);
              };
              return (
                <>
                  <S.User key={v}>
                    <S.LeftBox onClick={() => userProfile(data.uuid)}>
                      <S.Profile img={data.profile} />
                      <S.UserNickName>{data.id}</S.UserNickName>
                    </S.LeftBox>
                    <S.RightBox>
                      {data.follow_datetime === null ? null : (
                        <S.FollowDate>
                          팔로우를 시작한 날짜 :{" "}
                          {data.follow_datetime.substring(5, 7) +
                            "월 " +
                            data.follow_datetime.substring(8, 10) +
                            "일"}
                        </S.FollowDate>
                      )}
                      {data.is_following ? (
                        <S.FollowingBtn
                          onClick={() => unFollowClick(data.uuid)}
                        >
                          팔로우중
                        </S.FollowingBtn>
                      ) : (
                        <S.FollowBtn onClick={() => followClick(data.uuid)}>
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
