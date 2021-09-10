import * as S from "./Styles";
import More from "../../../assets/icons/more.svg";
import { DefaultImage } from "../../../assets/index";

const FollowList = (): JSX.Element => {
  return (
    <S.Container>
      <S.SectionTitle>
        <span>팔로워</span>
      </S.SectionTitle>
      <S.FollowContainer>
        <S.Follow img={DefaultImage} to="/"></S.Follow>
        <S.Follow img={DefaultImage} to="/"></S.Follow>
        <S.Follow img={DefaultImage} to="/"></S.Follow>
        <S.Follow img={DefaultImage} to="/"></S.Follow>
        <S.Follow img={DefaultImage} to="/"></S.Follow>
        <S.Follow img={DefaultImage} to="/"></S.Follow>
        <S.Follow img={DefaultImage} to="/"></S.Follow>
        <S.MoreIcon alt="more" src={More} />
      </S.FollowContainer>
    </S.Container>
  );
};

export default FollowList;
