import { Link } from "react-router-dom";
import Header from "../Header/Header";
import * as S from "./styles";
import HelloImg from "../../assets/delusional/delusional3.png";
import Dream from "../Dream/Dream";
import MyDreamDiary from "../CardDream/MyDreamDiary/MyDreamDiary";
import DreamList from "./DreamList/DreamList";
import Footer from "../Footer/Footer";
import FollowList from "./FollowList/FollowList";
import MyDreamDiaryList from "./DreamDiaryList/MyDreamDiaryList/MyDreamDiaryList";
import FollowDreamDiaryList from "./DreamDiaryList/FollowDreamDiaryList/FollowDreamDiaryList";
// import MyDreamDiary from "../CardDream/MyDreamDiary/MyDreamDiary";

const MainPage = (): JSX.Element => {
  return (
    <>
      <S.ContentContainer>
        <S.HelloSection>
          <S.HelloContainer>
            <S.HelloTitle>
              자몽에 오신걸 환영합니다. <br />
              로그인 후 더 많은 기능을 사용해 보세요.
            </S.HelloTitle>
            <S.HelloContent>
              <Link to="/">공개된 꿈 보기  </Link>
              <Link to="/login">로그인  </Link>
            </S.HelloContent>
            <S.HelloImage>
              <img src={HelloImg} alt="hello img" />
            </S.HelloImage>
          </S.HelloContainer>
        </S.HelloSection>
        <FollowList />
        <S.SectionContainer>
          <MyDreamDiaryList />
          <FollowDreamDiaryList />
          <DreamList />
        </S.SectionContainer>
      </S.ContentContainer>
    </>
  );
};

export default MainPage;