import { BorderButton } from "../styles";
import * as S from "./styles";
import defaultImg from "../../../assets/DefaultPostingImages/1.jpg";
import Chat from "../../../assets/icons/Chat.svg";
import Coin from "../../../assets/icons/Coin.svg";
import Discovery from "../../../assets/icons/Discovery.svg";
import ShoppingCart from "../../../assets/icons/ShoppingCart.svg";

const NonLoginComponent = (): JSX.Element => {
  return (
    <>
      <S.NavigationContainer>
        <S.LinksContainer>
          <S.LinkComponentContainer to="/">
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
          <S.LinkComponentContainer to="/">
            <img alt="ShoppingCart" src={ShoppingCart} />
            <span>꿈 판매</span>
          </S.LinkComponentContainer>
        </S.LinksContainer>
        <S.UserProfileContainer>
          <S.UserProfileImg alt="user-img" src={defaultImg} />
          <span>USER04</span>
        </S.UserProfileContainer>
      </S.NavigationContainer>
      <BorderButton>로그아웃</BorderButton>
    </>
  );
};

export default NonLoginComponent;
