import * as S from "./styles";
import Logo from "../../assets/logo/testLogo.png";
import SearchIcon from "../../assets/icon/searchIcon.svg";
import { Link } from "react-router-dom";
import Filter from "./Filter/Filter";
import { useLayoutEffect, useState } from "react";
import LoginComponent from "./LoginComponent";
import NonLoginComponent from "./NonLoginComponent";

const Header = (): JSX.Element => {
  const paddingValue = 10;
  const [headerPadding, setHeaderPadding] = useState<number>(paddingValue);
  const [headerLineOpacity, setHeaderLineOpacity] = useState<number>(0);

  window.addEventListener("scroll", (event) => {
    setHeaderPadding(window.pageYOffset === 0 ? paddingValue : 0);
    setHeaderLineOpacity(window.pageYOffset === 0 ? 0 : 1);
  });

  return (
    <S.HeaderContainer pd={headerPadding} lineOpacity={headerLineOpacity}>
      <S.HeaderContentContainer>
        <S.LogoConainer>
          <S.LogoOuter>
            <Link to="/">
              <img alt="logo" src={Logo}></img>
            </Link>
          </S.LogoOuter>
        </S.LogoConainer>
        <S.RightContainer>
          <S.RightOuter>
            <S.SearchContainer>
              <S.SearchInputContainer>
                <img alt="search icon" src={SearchIcon} />
                <S.SearchInput placeholder="검색할 내용을 입력하세요." />
              </S.SearchInputContainer>
              <Filter />
            </S.SearchContainer>
            <S.RightContentContainer>
              {/* <LoginComponent /> */}
              <NonLoginComponent />
            </S.RightContentContainer>
          </S.RightOuter>
        </S.RightContainer>
      </S.HeaderContentContainer>
    </S.HeaderContainer>
  );
};

export default Header;
