import { useHistory } from "react-router";
import { following } from "../../../models/dto/response/followingsResponse";
import { follow, unfollow } from "../../../utils/api/Profile";
import * as I from "../styles";

interface PropsType {
  data: following;
  refresh: () => void;
}

const FollowUser = ({ data, refresh }: PropsType) => {
  const { is_following, profile, id, follow_datetime, uuid } = data;
  const { push } = useHistory();

  const userProfile = (uuid: string) => {
    alert("QNd");
    push(`/user/${uuid}`);
  };

  const dateToString = (date: Date): string => {
    if (date.getFullYear() === new Date().getFullYear()) {
      return `${date.getMonth() + 1}월 ${date.getDate()}일`;
    } else {
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    }
  };

  const followClick = async (id: string) => {
    try {
      await follow(id);
      refresh();
    } catch (error) {
      throw error;
    }
  };

  const unFollowClick = async (id: string) => {
    try {
      await unfollow(id);
      refresh();
    } catch (error) {
      throw error;
    }
  };

  return (
    <I.Outer>
      <I.Container>
        <I.ProfileContainer onClick={() => userProfile(uuid)}>
          <I.ProfileImage src={profile} alt="profile image" />
          <span>{id}</span>
        </I.ProfileContainer>
        <I.ButtonContainer>
          <span>팔로우를 시작한 날짜 : {dateToString(new Date(follow_datetime))}</span>
          {is_following ? (
            <I.BorderButton onClick={() => unFollowClick(uuid)}>팔로우중</I.BorderButton>
          ) : (
            <I.BlueButton onClick={() => followClick(uuid)}>팔로우</I.BlueButton>
          )}
        </I.ButtonContainer>
      </I.Container>
      <I.Line />
    </I.Outer>
  );
};

export default FollowUser;
