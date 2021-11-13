import { BorderButton } from "../styles";
import * as S from "./styles";
import defaultImg from "../../../assets/DefaultPostingImages/1.jpg";
import Chat from "../../../assets/icons/Chat.svg";
import Coin from "../../../assets/icons/Coin.svg";
import Discovery from "../../../assets/icons/Discovery.svg";
import ShoppingCart from "../../../assets/icons/ShoppingCart.svg";
import { Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { getMyProfile } from "../../../utils/api/Profile";
import NonLoginComponent from "../NonLoginComponent";

const LoginComponent = (): JSX.Element => {
  interface DataType {
    name: string;
    profile: string;
  }

  interface Nav {
    img: string;
    text: string;
    to: string;
  }

  const [data, setData] = useState<DataType | null>(null);
  const navs: Nav[] = [
    {
      img: Chat,
      text: "채팅",
      to: "/chat",
    },
    {
      img: Discovery,
      text: "꿈 해몽",
      to: "/",
    },
    {
      img: Coin,
      text: "꿈 구매",
      to: "/",
    },
    {
      img: ShoppingCart,
      text: "꿈 판매",
      to: "/sell",
    },
  ];

  const setHeaderData = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await getMyProfile(token!);
      const { name, profile } = response.data.content.response;
      setData({ name: name, profile: profile });
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    setHeaderData();
  }, []);

  const navRender = navs.map((value) => {
    const { img, text, to } = value;
    return (
      <S.LinkComponentContainer to={to}>
        <img alt="chat" src={img} />
        <span>{text}</span>
      </S.LinkComponentContainer>
    );
  });

  return (
    <>
      {data ? (
        <>
          <S.NavigationContainer>
            <S.LinksContainer>{navRender}</S.LinksContainer>
            <S.NoDecoLink to="/profile">
              <S.UserProfileContainer>
                <S.UserProfileImg alt="user-img" src={data.profile} />
                <span>{data.name}</span>
              </S.UserProfileContainer>
            </S.NoDecoLink>
          </S.NavigationContainer>
          <BorderButton>로그아웃</BorderButton>
        </>
      ) : (
        <NonLoginComponent />
      )}
    </>
  );
};

export default LoginComponent;
