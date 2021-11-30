import { Link } from "react-router-dom";
import HelloImg from "../../assets/delusional/delusional3.png";
import * as S from "./styles";
import { DreamList, FollowList, MyDreamDiaryList, FollowDreamDiaryList } from "./Index";
import { useLayoutEffect, useRef, useState } from "react";
import { getMyProfile } from "../../utils/api/Profile";
import { useHistory } from "react-router-dom";

const MainPage = (): JSX.Element => {
  interface LinkType {
    text: string;
    onClick: () => void;
  }

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const followRef = useRef<HTMLDivElement>(null);
  const shareDreamRef = useRef<HTMLDivElement>(null);

  const { current: follow } = followRef;
  const { current: shareDream } = shareDreamRef;

  const { push } = useHistory();

  const toFollow = () => {
    if (follow) {
      const top = follow.offsetTop - 64;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  };

  const toShareDream = () => {
    if (shareDream) {
      const top = shareDream.offsetTop - 64;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  };

  const loginLinks: LinkType[] = [
    {
      text: "팔로우 최신 글 보러가기 ",
      onClick: toFollow,
    },
    {
      text: "오늘 일기 적기  ",
      onClick: () => {
        push("/diary/write");
      },
    },
    {
      text: "최근 내가 쓴 일기 보러가기  ",
      onClick: () => {
        push("/diary");
      },
    },
    {
      text: "공개된 꿈 보기 ",
      onClick: toShareDream,
    },
  ];

  const nonloginLinks: LinkType[] = [
    {
      text: "공개된 꿈 보기 ",
      onClick: toShareDream,
    },
    {
      text: "로그인 ",
      onClick: () => {
        push("/login");
      },
    },
  ];

  const loginCheck = async () => {
    const expireAt = localStorage.getItem("expireAt");

    if (!expireAt) {
      return;
    }
    setIsLogin(true);
    try {
      const { id } = (await getMyProfile()).data.content.response;
      setId(id);
    } catch (error) {
      console.log(error);
      setIsLogin(false);
    }
  };

  useLayoutEffect(() => {
    loginCheck();
  }, []);

  const renderLinks = () => {
    const links = isLogin ? loginLinks : nonloginLinks;

    const list = links.map((value, index) => {
      const { text, onClick } = value;
      return (
        <div onClick={onClick} key={index}>
          {text}
        </div>
      );
    });

    const returnValue: JSX.Element[] = [];

    for (let i = 0; i < list.length; i += 2) {
      returnValue.push(
        <S.HelloInner>
          {list[i]}
          {list[i + 1]}
        </S.HelloInner>
      );
    }

    return returnValue;
  };

  return (
    <>
      <S.ContentContainer>
        <S.HelloSection>
          <S.HelloContainer>
            {isLogin ? (
              <S.HelloTitle>
                안녕하세요 {id}님! <br />
                자몽에 오신걸 환영합니다.
              </S.HelloTitle>
            ) : (
              <S.HelloTitle>
                자몽에 오신걸 환영합니다. <br />
                로그인 후 더 많은 기능을 사용해 보세요.
              </S.HelloTitle>
            )}
            <S.HelloContent>{renderLinks()}</S.HelloContent>
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
              <div ref={followRef}>
                <FollowDreamDiaryList />
              </div>
            </>
          )}
          <div ref={shareDreamRef}>
            <DreamList />
          </div>
        </S.SectionContainer>
      </S.ContentContainer>
    </>
  );
};

export default MainPage;
