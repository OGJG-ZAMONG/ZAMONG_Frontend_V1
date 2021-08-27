import { Link } from "react-router-dom";
import Header from "../Header/Header";
import * as S from "./styles";
import HelloImg from "../../assets/delusional/delusional3.png";


const MainPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <S.ContentContainer>
        <S.HelloSection>
        <S.HelloContainer>
            <S.HelloTitle>
              자몽에 오신걸 환영합니다. <br/>
              로그인 후 더 많은 기능을 사용해 보세요.
            </S.HelloTitle>
            <S.HelloContent>
              <Link to="/">공개된 꿈 보기  </Link>
              <Link to="/">로그인  </Link>
            </S.HelloContent>
            <S.HelloImage>
              <img src={HelloImg} alt="hello img" />
            </S.HelloImage>
          </S.HelloContainer>
        </S.HelloSection>
        <S.HelloSection>
          
        </S.HelloSection>
        
      </S.ContentContainer>
    </>
  );
};

export default MainPage;
