import * as S from "./styles";
import Logo from "../../assets/logo/logo.svg";
import SearchIcon from "../../assets/icons/searchIcon.svg";
import { Link, RouteComponentProps, withRouter, useHistory } from "react-router-dom";
import Filter from "./Filter/Filter";
import { useEffect, useState } from "react";
import LoginComponent from "./LoginComponent";
import Code from "../../interface/Code";

const Header = ({ history }: RouteComponentProps): JSX.Element => {
  const paddingValue = 10;
  const [headerPadding, setHeaderPadding] = useState<number>(paddingValue);
  const [isTop, setIsTop] = useState<boolean>(true);
  const [headerLineOpacity, setHeaderLineOpacity] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<Code[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const { push } = useHistory();

  const scrollEvent = () => {
    if (window.pageYOffset === 0) {
      setIsTop(true);
    } else if (isTop) {
      setIsTop(false);
    }
  };

  useEffect(() => {
    setHeaderPadding(isTop ? paddingValue : 0);
    setHeaderLineOpacity(isTop ? 0 : 1);
  }, [isTop]);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  useEffect(() => {
    history.listen(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchText.length <= 0) {
        alert("검색어를 입력해주세요.");
        return;
      }

      push(
        `/search?content=${searchText}&types=${selectedType.map((value) => value.code).join(",")}`
      );
    }
  };

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
                <S.SearchInput
                  value={searchText}
                  onChange={onChangeHandler}
                  placeholder="검색할 내용을 입력하세요."
                  onKeyDown={onKeyDownHandler}
                />
              </S.SearchInputContainer>
              <Filter selectedState={[selectedType, setSelectedType]} />
            </S.SearchContainer>
            <S.RightContentContainer>
              <LoginComponent />
            </S.RightContentContainer>
          </S.RightOuter>
        </S.RightContainer>
      </S.HeaderContentContainer>
    </S.HeaderContainer>
  );
};

export default withRouter(Header);
