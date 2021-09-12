import Accordion from "../../Accordion/Accordion";
import * as G from "../../../../styles";
import * as S from "./styles";
import Tag from "../../../../../../Tag/Tag";

const DreamType = (): JSX.Element => {
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
  const Content = (): JSX.Element => {
    return (
      <>
        <S.Title>유형</S.Title>
        <S.TagContainer>
          <Tag>악몽</Tag>
          <Tag>루시드 드림</Tag>
          <Tag>길몽</Tag>
        </S.TagContainer>
      </>
    );
  };
  return (
    <>
      <Accordion padding={16} header={<Header />} content={<Content />} />
    </>
  );
};

export default DreamType;
