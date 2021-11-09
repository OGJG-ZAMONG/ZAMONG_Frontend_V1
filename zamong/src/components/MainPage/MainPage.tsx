import { Link } from "react-router-dom";
import HelloImg from "../../assets/delusional/delusional3.png";
import * as S from "./styles";
import { DreamList, FollowList, MyDreamDiaryList, FollowDreamDiaryList } from "./Index";
import { useLayoutEffect, useState } from "react";
import { getMyProfile } from "../../utils/api/Profile";

const MainPage = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const loginCheck = async () => {
    const expireAt = localStorage.getItem("expireAt");
    if (expireAt && new Date(expireAt).getTime() > new Date().getTime()) {
      //로그인 중
      setIsLogin(true);

      const accessToken = localStorage.getItem("access_token")!;
      try {
        const { name } = (await getMyProfile(accessToken)).data.content.response;
        setName(name);
      } catch (error) {}
    }
  };

  useLayoutEffect(() => {
    loginCheck();
  }, []);

  return (
    <>
      <S.ContentContainer>
        <S.HelloSection>
          <S.HelloContainer>
            {isLogin ? (
              <S.HelloTitle>
                안녕하세요 {name}님! <br />
                자몽에 오신걸 환영합니다.
              </S.HelloTitle>
            ) : (
              <S.HelloTitle>
                자몽에 오신걸 환영합니다. <br />
                로그인 후 더 많은 기능을 사용해 보세요.
              </S.HelloTitle>
            )}
            <S.HelloContent>
              <Link to="/">공개된 꿈 보기  </Link>
              <Link to="/login">로그인  </Link>
            </S.HelloContent>
            <S.HelloImage>
              <img src={HelloImg} alt="hello img" />
            </S.HelloImage>
          </S.HelloContainer>
        </S.HelloSection>
        {isLogin && <FollowList />}
        <S.SectionContainer>
          {isLogin && (
            <>
              <MyDreamDiaryList />
              <FollowDreamDiaryList />
            </>
          )}
          <DreamList />
        </S.SectionContainer>
      </S.ContentContainer>
    </>
  );
};

export default MainPage;
