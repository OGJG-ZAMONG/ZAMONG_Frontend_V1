import Tag from "../../../../../../../Tag/Tag";
import * as G from "../../../../../styles";
import * as S from "../styles";

const Header = (): JSX.Element => {
  return (
    <S.HeaderContainer>
      <G.TitleContainer>
        <G.Title>{"꿈의 유형"}</G.Title>
      </G.TitleContainer>
      <S.TypeContainer>
        <Tag>악몽</Tag>
        <Tag>루시드 드림</Tag>
        <Tag>길몽</Tag>
      </S.TypeContainer>
    </S.HeaderContainer>
  );
};

export default Header;
