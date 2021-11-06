import { BorderButton } from "../styles";
import * as S from "./styles";
import defaultImg from "../../../assets/DefaultPostingImages/1.jpg";
import Chat from "../../../assets/icons/Chat.svg";
import Coin from "../../../assets/icons/Coin.svg";
import Discovery from "../../../assets/icons/Discovery.svg";
import ShoppingCart from "../../../assets/icons/ShoppingCart.svg";
import { Link } from "react-router-dom";

const LoginComponent = (): JSX.Element => {
  return (
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
          <S.UserProfileImg alt="user-img" src={defaultImg} />
          <span>USER04</span>
        </S.UserProfileContainer>
      </S.NavigationContainer>
      <Link to="/">
        <BorderButton>로그아웃</BorderButton>
      </Link>
    </>
  );
};

export default LoginComponent;
