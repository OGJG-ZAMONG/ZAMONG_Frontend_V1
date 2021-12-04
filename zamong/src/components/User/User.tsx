import { useHistory } from "react-router";
import { following } from "../../models/dto/response/followingsResponse";
import { follow, unfollow } from "../../utils/api/Profile";
import * as S from "./styles";

interface PropType {
  data: following;
  refresh: () => void;
}

const User = ({ data, refresh }: PropType) => {
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
    <S.Outer>
      <S.Container>
        <S.ProfileContainer onClick={() => userProfile(uuid)}>
          <S.ProfileImage src={profile} alt="profile image" />
          <span>{id}</span>
        </S.ProfileContainer>
        <S.ButtonContainer>
          <span>팔로우를 시작한 날짜 : {dateToString(new Date(follow_datetime))}</span>
          {is_following ? (
            <S.BorderButton onClick={() => unFollowClick(uuid)}>팔로우중</S.BorderButton>
          ) : (
            <S.BlueButton onClick={() => followClick(uuid)}>팔로우</S.BlueButton>
          )}
        </S.ButtonContainer>
      </S.Container>
      <S.Line />
    </S.Outer>
  );
};

export default User;
