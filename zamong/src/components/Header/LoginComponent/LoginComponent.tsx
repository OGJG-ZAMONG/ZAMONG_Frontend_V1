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

  const [data, setData] = useState<DataType | null>(null);

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

  return (
    <>
      {data ? (
        <>
          <S.NavigationContainer>
            <S.LinksContainer>
              <S.LinkComponentContainer to="/chat">
                <img alt="chat" src={Chat} />
                <span>채팅</span>
              </S.LinkComponentContainer>
              <S.LinkComponentContainer to="/">
                <img alt="Discovery" src={Discovery} />
                <span>꿈 해몽</span>
              </S.LinkComponentContainer>
              <S.LinkComponentContainer to="/">
                <img alt="Coin" src={Coin} />
                <span>꿈 구매</span>
              </S.LinkComponentContainer>
              <S.LinkComponentContainer to="/sell">
                <img alt="ShoppingCart" src={ShoppingCart} />
                <span>꿈 판매</span>
              </S.LinkComponentContainer>
            </S.LinksContainer>
            <S.UserProfileContainer>
              <S.UserProfileImg alt="user-img" src={data.profile} />
              <span>{data.name}</span>
            </S.UserProfileContainer>
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
